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
            <span className={styles.highlight}>Backend Developer</span> with a
            focus on <span className={styles.highlight}>scalability</span> and{" "}
            <span className={styles.highlight}>reliability</span>.
          </li>

          <li>
            Currently, working as Software Engineer II at{" "}
            <a href="https://vwo.com/" className={styles.highlight}>
              VWO
            </a>
          </li>

          <li>
            I prefer working in <span className={styles.highlight}>Go</span>,{" "}
            <span className={styles.highlight}>Python</span> and{" "}
            <span className={styles.highlight}>TypeScript</span>.
          </li>
          <li>
            I have experience working on{" "}
            <span className={styles.highlight}>large-scale systems</span> that
            handle large amounts of traffic and data.
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
