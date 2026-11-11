import Link from "next/link";
import Layout from "@/components/layouts/commonLayout";
import Articles from "@/components/articles";
import { getBlogPosts } from "@/utility/posts";
import styles from "@/styles/Home.module.css";
import utilStyles from "@/styles/utils.module.css";
export default async function HomePage() {
  const articles = await getBlogPosts();
  return (
    <Layout pageType="home">
      <section className={styles.hero} aria-labelledby="hero-title">
        <p className={styles.eyebrow}>Software engineer · CoinDCX</p>
        <h1 className={styles.name} id="hero-title">
          Building dependable systems for products that operate at scale.
        </h1>
        <p className={styles.summary}>
          I’m Prathamesh Tamanekar, a software engineer at CoinDCX. I design and
          build backend systems with an emphasis on reliability,
          maintainability, and the operational details that keep products
          running smoothly.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryAction} href="#articles">
            Read my articles
          </Link>
          <a
            className={styles.secondaryAction}
            href="mailto:prathamt3108@gmail.com"
          >
            Get in touch
          </a>
        </div>
      </section>
      <section className={styles.experience} aria-labelledby="experience-title">
        <div>
          <p className={styles.eyebrow}>Experience</p>
          <h2 className={utilStyles.headingLg} id="experience-title">
            Backend work with production in mind.
          </h2>
        </div>
        <div className={styles.experienceCopy}>
          <p>
            I currently build at CoinDCX and previously worked at Wingify, where
            I contributed to VWO.
          </p>
          <ul>
            <li>Scalable and reliable backend systems</li>
            <li>Data-intensive, high-traffic applications</li>
            <li>Go, Python, TypeScript, and Solidity</li>
          </ul>
        </div>
      </section>
      <section
        className={styles.contentSection}
        id="articles"
        aria-labelledby="articles-title"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Writing</p>
          <h2 className={utilStyles.headingXl} id="articles-title">
            Latest articles
          </h2>
        </div>
        <Articles allArticlesData={articles} />
      </section>
    </Layout>
  );
}
