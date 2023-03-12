import Head from "next/head";
import Navbar from "./navbar";
import ProfileBanner from "./profileBanner";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export const siteTitle = "Prathamesh Tamanekar";

export default function Layout({
  children,
  pageType,
}: {
  children: any;
  pageType: string;
}) {
  return (
    <div className={`${styles.wrapper}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.headerContainer}>
        <Navbar />
      </div>
      <div className={styles.contentLayout}>
        {pageType !== "home" && (
          <div
            className={`${styles.articlesContainer} ${utilStyles.card}`}
          ></div>
        )}
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
  );
}
