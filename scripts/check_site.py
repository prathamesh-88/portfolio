"""Check the static portfolio without third-party dependencies or network access."""

import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET


ORIGIN = "https://prathamesh.online"


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.duplicate_ids = set()
        self.links = []
        self.metadata = {}
        self.canonical = []
        self.h1_count = 0
        self.in_title = False
        self.title = ""

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            identifier = attrs["id"]
            if identifier in self.ids:
                self.duplicate_ids.add(identifier)
            self.ids.add(identifier)
        if tag == "h1":
            self.h1_count += 1
        if tag == "title":
            self.in_title = True
        if tag == "meta":
            key = attrs.get("name") or attrs.get("property")
            self.metadata[key] = attrs.get("content", "")
            if key in ("og:image", "twitter:image"):
                self.links.append(attrs.get("content", ""))
        if tag == "link" and "canonical" in attrs.get("rel", "").split():
            self.canonical.append(attrs.get("href", ""))
        for key in ("href", "src"):
            if key in attrs:
                self.links.append(attrs[key])

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title += data


def validate_site(repository):
    repository = Path(repository).resolve()
    public = repository / "public"
    errors = []
    pages = {}
    expected_urls = set()

    for required in ("index.html", "404.html", "robots.txt", "sitemap.xml"):
        if not (public / required).is_file():
            errors.append(f"public/{required}: required file is missing")

    for path in sorted(public.rglob("*.html")):
        page = Page()
        page.feed(path.read_text(encoding="utf-8"))
        pages[path] = page
        name = path.relative_to(repository)
        route = "/" + path.relative_to(public).as_posix().removesuffix("index.html")
        if path == public / "404.html":
            route = "/"
        else:
            expected_urls.add(ORIGIN + route)
        if page.h1_count != 1:
            errors.append(f"{name}: expected one h1, found {page.h1_count}")
        if not page.title.strip():
            errors.append(f"{name}: title is missing")
        if page.duplicate_ids:
            errors.append(f"{name}: duplicate IDs: {sorted(page.duplicate_ids)}")
        if page.canonical != [ORIGIN + route]:
            errors.append(f"{name}: canonical URL must be {ORIGIN + route}")
        for key in ("description", "viewport", "og:title", "og:description",
                    "og:url", "og:image", "twitter:card", "twitter:image"):
            if not page.metadata.get(key, "").strip():
                errors.append(f"{name}: missing metadata {key}")

    for path, page in pages.items():
        for link in page.links:
            url = urlsplit(link)
            if url.scheme or url.netloc:
                if (url.scheme, url.netloc) != ("https", urlsplit(ORIGIN).netloc):
                    continue
            decoded = unquote(url.path)
            destination = path if not decoded else (
                public / decoded.lstrip("/") if decoded.startswith("/")
                else path.parent / decoded
            )
            destination = destination.resolve()
            if not destination.is_relative_to(public):
                errors.append(f"{path.relative_to(repository)}: link escapes public/: {link}")
                continue
            if destination.is_dir():
                destination /= "index.html"
            if not destination.is_file():
                errors.append(f"{path.relative_to(repository)}: missing link target: {link}")
            elif url.fragment and destination in pages:
                if unquote(url.fragment) not in pages[destination].ids:
                    errors.append(f"{path.relative_to(repository)}: missing anchor: {link}")

    try:
        sitemap = ET.parse(public / "sitemap.xml")
        urls = [element.text for element in sitemap.findall(
            ".//{http://www.sitemaps.org/schemas/sitemap/0.9}loc"
        )]
        if set(urls) != expected_urls or len(urls) != len(set(urls)):
            errors.append("public/sitemap.xml: URLs must match all non-404 HTML pages exactly")
    except (OSError, ET.ParseError) as error:
        errors.append(f"public/sitemap.xml: {error}")

    robots = public / "robots.txt"
    if robots.is_file() and f"Sitemap: {ORIGIN}/sitemap.xml" not in robots.read_text():
        errors.append("public/robots.txt: missing production sitemap URL")

    try:
        config = json.loads((repository / "vercel.json").read_text())
        for key, expected in {"framework": None, "buildCommand": "",
                              "installCommand": "", "outputDirectory": "public",
                              "trailingSlash": True}.items():
            if key not in config or config[key] != expected:
                errors.append(f"vercel.json: {key} must be {expected!r}")
        for source, destination in (("/articles/", "/#writing"), ("/projects/", "/#work")):
            expected = {"source": source, "destination": destination, "permanent": True}
            if expected not in config.get("redirects", []):
                errors.append(f"vercel.json: missing permanent redirect {source} to {destination}")
    except (OSError, json.JSONDecodeError) as error:
        errors.append(f"vercel.json: {error}")

    return errors


if __name__ == "__main__":
    errors = validate_site(Path(__file__).resolve().parents[1])
    if errors:
        for error in errors:
            print(f"ERROR: {error}")
        raise SystemExit(1)
    print("PASS: static pages, internal links, anchors, metadata, sitemap, and Vercel configuration")
