import Link from "next/link";
import Navbar from "../navbar";
import ProfileBanner from "../profileBanner";
import Footer from "../footer";
import styles from "../../styles/layout.module.css";

export default function Layout({
  children,
  pageType,
}: {
  children: React.ReactNode;
  pageType: string;
}) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerContainer}>
          <Navbar />
        </div>
        <div
          className={`${styles.contentLayout} ${
            pageType === "home"
              ? styles.homeFlexDirection
              : styles.otherFlexDirection
          }`}
        >
          <div className={styles.articlesContainer} />
          <div className={styles.contentContainer}>
            <main>{children}</main>
            {pageType !== "home" && (
              <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
              </div>
            )}
          </div>
          <div
            className={`${styles.bannerContainer} ${
              pageType === "home" ? "" : styles.mobileHidden
            }`}
          >
            <ProfileBanner />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
