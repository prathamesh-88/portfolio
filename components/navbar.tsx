import Link from "next/link";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Prathamesh.</Link>
      </div>
      <div className={`${styles.navGroup}`}>
        <div className={`${styles.navItem}`}>
          <Link href="/">Home</Link>
        </div>
        <div className={`${styles.navItem}`}>
          <Link href="/articles">Articles</Link>
        </div>
        <div className={`${styles.navItem}`}>
          <Link href="/projects">Projects</Link>
        </div>
      </div>
    </div>
  );
}
