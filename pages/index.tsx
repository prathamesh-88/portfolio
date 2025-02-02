import Head from "next/head";
import Layout, { siteTitle } from "@/components/layouts/commonLayout";
import styles from "@/styles/Home.module.css";
import utilStyles from "@/styles/utils.module.css";
import { getBlogPosts } from "../utility/posts";
import { getProjects } from "@/utility/projects";
import Articles from "@/components/articles";
import Projects from "@/components/projects";
import { HomeProps } from "@/types";
import { Roboto_Condensed } from "@next/font/google";

const robotoCondensed = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export async function getStaticProps() {
  const allArticlesData = await getBlogPosts();
  const allProjectsData = getProjects();
  return {
    props: {
      allArticlesData,
      allProjectsData,
    },
  };
}

export default function Home({ allArticlesData, allProjectsData }: HomeProps) {
  return (
    <Layout pageType="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.intro}>
        <div className={`${styles.name} ${robotoCondensed.className}`}>
          Prathamesh <span className={utilStyles.accent}>Tamanekar</span>
        </div>
        <ul>
          <li>
            <span className={styles.highlight}>Software Engineer</span> with a
            focus on building <span className={styles.highlight}>scalable</span>{" "}
            and <span className={styles.highlight}>reliable</span> backend
            systems.
          </li>
          <li>
            Currently, working at{" "}
            <span className={styles.highlight}>Edra Labs</span> as a{" "}
            <span className={styles.highlight}>Founding Software Engineer</span>
            .
          </li>
          <li>
            Interested in Web development, Machine Learning and Blockchain
            technologies.
          </li>
          <li>
            Previously, worked at{" "}
            <a href="https://wingify.com/" className={styles.highlight}>
              Wingify
            </a>{" "}
            and helped build{" "}
            <a href="https://vwo.com/" className={styles.highlight}>
              VWO
            </a>
            .
          </li>
          <li>
            I prefer working with <span className={styles.highlight}>Go</span>,{" "}
            <span className={styles.highlight}>Solidity</span>,{" "}
            <span className={styles.highlight}>Python</span> and{" "}
            <span className={styles.highlight}>TypeScript</span>.
          </li>
          <li>
            I have experience working on{" "}
            <span className={styles.highlight}>large-scale</span>,{" "}
            <span className={styles.highlight}>data intensive</span>,{" "}
            <span className={styles.highlight}>high-traffic</span> systems.
          </li>
        </ul>
      </section>
      <h2
        className={` ${styles.articlesHeading} ${utilStyles.headingXl} ${styles.highlight} ${robotoCondensed.className}`}
      >
        Latest Articles
      </h2>
      <Articles allArticlesData={allArticlesData} />
      <h2
        className={` ${styles.articlesHeading} ${utilStyles.headingXl} ${styles.highlight} ${robotoCondensed.className}`}
      >
        Projects
      </h2>
      <Projects allProjectsData={allProjectsData} />
    </Layout>
  );
}
