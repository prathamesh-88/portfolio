import Head from "next/head";
import Navbar from "../navbar";
import ProfileBanner from "../profileBanner";
import Footer from "../footer";
import styles from "../../styles/layout.module.css";
import Link from "next/link";
import { Inconsolata } from "@next/font/google";

const globalFont = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const siteTitle = "Prathamesh Tamanekar";

export default function Layout({
  children,
  pageType,
}: {
  children: any;
  pageType: string;
}) {
  return (
    <>
      <div className={`${styles.wrapper} ${globalFont.className}`}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Backend Development portfolio of Prathamesh Tamanekar."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          {/* OpenGraph Meta data */}
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://prathameshtamanekar.vercel.app/preview.png"
          />
          <meta
            property="og:title"
            content="Prathamesh Tamanekar - Portfolio"
          />
          <meta
            property="og:url"
            content="https://prathameshtamanekar.vercel.app/"
          />
          <meta
            property="og:description"
            content="Backend Development Portfolio of Prathamesh Tamanekar"
          />
          {/* Twitter Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://prathameshtamanekar.vercel.app/preview.png"
          />
          <meta
            name="twitter:title"
            content="Prathamesh Tamanekar - Portfolio"
          />
          <meta
            name="twitter:description"
            content="Prathamesh Tamanekar - Portfolio"
          />
          <meta
            property="twitter:url"
            content="https://prathameshtamanekar.vercel.app/"
          />
          <meta
            property="twitter:domain"
            content="prathameshtamanekar.vercel.app"
          />
          <meta name="twitter:image:alt" content="SmoothPlug Landing Page" />
          <meta name="twitter:site" content="@pratham_eshh" />
          <meta name="twitter:creator" content="@pratham_eshh" />
          <meta name="twitter:creator:id" content="@pratham_eshh" />
        </Head>
        <div className={styles.headerContainer}>
          <Navbar />
        </div>
        <div
          className={`${styles.contentLayout} ${
            pageType == "home"
              ? styles.homeFlexDirection
              : styles.otherFlexDirection
          }`}
        >
          <div className={`${styles.articlesContainer}`}></div>
          <div className={`${styles.contentContainer}`}>
            <main>{children}</main>
            {pageType !== "home" && (
              <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
              </div>
            )}
          </div>
          <div className={`${styles.bannerContainer}`}>
            <ProfileBanner />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
