import Head from "next/head";
import Layout, { siteTitle } from "@/components/layouts/commonLayout";
import styles from "../styles/home.module.css";
import utilStyles from "@/styles/utils.module.css";
import { getSortedPostsData } from "../utility/posts";
import Articles from "@/components/articles";
import { ArticlesProps } from "@/types";

export async function getStaticProps() {
  const allArticlesData = getSortedPostsData();
  return {
    props: {
      allArticlesData,
    },
  };
}

export default function Home({ allArticlesData }: ArticlesProps) {
  return (
    <Layout pageType="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.intro}>
        <div className={`${styles.name}`}>
          Hi{" "}
          <span role="image" className="waving-hand">
            👋
          </span>
          , I&apos;m Prathamesh Tamanekar.
        </div>
        <ul>
          <li>
            As a <strong>Backend Web Developer</strong> at{" "}
            <b>
              <a href="https://wingify.com/">Wingify</a>
            </b>
            , I contribute towards enhancing the functionality of{" "}
            <b>
              <a href="https://vwo.com/">VWO</a>
            </b>
            . My job is to identify and seamlessly integrate third-party
            applications into our platform, ensuring that our users have access
            to the most innovative and effective tools available.
          </li>
          <li>
            As a Web Developer, I am constantly inspired by the ever-evolving
            nature of web technologies and their potential to revolutionize the
            digital landscape. I have honed my skills in programming languages
            such as Python, TypeScript, GO and PHP, which have enabled me to
            develop robust, scalable, and secure backend systems that power
            high-performance websites and web applications.
          </li>
          <li>
            My passion for Machine Learning stems from its ability to provide
            actionable insights and predictive analytics that drive informed
            decision-making. With a deep understanding of statistical
            algorithms, data analysis, and neural networks, I have developed ML
            models that have solved complex problems and provided strategic
            advantages to businesses in various industries.
          </li>
          <li>
            My pet projects can be viewed in the <strong>Projects</strong>{" "}
            section. Always open to work on any interesting, collaborative
            project.
          </li>
        </ul>
      </section>
      <h2 className={`${utilStyles.headingLg}`}>Articles</h2>
      <Articles allArticlesData={allArticlesData} />
    </Layout>
  );
}
