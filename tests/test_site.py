import json
from pathlib import Path
import shutil
import tempfile
import unittest

from scripts.check_site import validate_site


class SiteValidationTests(unittest.TestCase):
    def setUp(self):
        self.temporary = tempfile.TemporaryDirectory()
        self.addCleanup(self.temporary.cleanup)
        self.root = Path(self.temporary.name)
        source = Path(__file__).resolve().parents[1]
        shutil.copytree(source / "public", self.root / "public")
        shutil.copyfile(source / "vercel.json", self.root / "vercel.json")

    def change_home(self, old, new):
        home = self.root / "public/index.html"
        home.write_text(home.read_text().replace(old, new, 1))

    def assert_error(self, text):
        errors = validate_site(self.root)
        self.assertTrue(any(text in error for error in errors), errors)

    def test_valid_site(self):
        self.assertEqual(validate_site(self.root), [])

    def test_missing_asset(self):
        (self.root / "public/assets/style.css").unlink()
        self.assert_error("missing link target: /assets/style.css")

    def test_missing_anchor(self):
        self.change_home('href="#work"', 'href="#missing"')
        self.assert_error("missing anchor: #missing")

    def test_duplicate_ids(self):
        self.change_home('id="about"', 'id="work"')
        self.assert_error("duplicate IDs")

    def test_missing_metadata(self):
        self.change_home('name="description"', 'name="removed-description"')
        self.assert_error("missing metadata description")

    def test_link_outside_public(self):
        self.change_home('href="#work"', 'href="/../README.md"')
        self.assert_error("link escapes public/")

    def test_stale_sitemap(self):
        sitemap = self.root / "public/sitemap.xml"
        sitemap.write_text(sitemap.read_text().replace("/work/edra/", "/work/missing/"))
        self.assert_error("URLs must match")

    def test_repository_root_cannot_be_published(self):
        path = self.root / "vercel.json"
        config = json.loads(path.read_text())
        config["outputDirectory"] = "."
        path.write_text(json.dumps(config))
        self.assert_error("outputDirectory must be 'public'")

    def test_missing_redirect(self):
        path = self.root / "vercel.json"
        config = json.loads(path.read_text())
        config["redirects"] = []
        path.write_text(json.dumps(config))
        self.assert_error("missing permanent redirect")


if __name__ == "__main__":
    unittest.main()
