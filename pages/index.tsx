import Head from "next/head";
import Layout, { siteTitle } from "@/components/layout";
import styles from "../styles/home.module.css";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../utility/posts";
import { AppProps } from "@/types";
import Articles from "@/components/articles";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }: AppProps) {
  return (
    <Layout pageType="home">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.intro}>
        <p className={`${utilStyles.headingMd}`}>
          Hi 👋, I'm Prathamesh Tamanekar.
        </p>
        <ul>
          <li>
            I am a <strong>Backend Developer</strong> at <a href="https://wingify.com/"><strong>Wingify</strong></a> contributing in the development of <strong><a href="https://vwo.com/">VWO</a></strong>.
          </li>
          <li>📝 I am open to work on any collaborative project.</li>
          <li>
            🤖 Interested in Artificial Intelligence, Machine learning and Web
            Application Development.
          </li>
          <li>
            📫 How to reach me <a href="mailto:prathamt3108@gmail.com">prathamt3108@gmail.com</a>
          </li>
        </ul>
      </section>
      <Articles allPostsData={allPostsData} />
    </Layout>
  );
}
