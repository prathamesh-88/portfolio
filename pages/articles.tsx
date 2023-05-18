import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/layouts/commonLayout";
import { getSortedPostsData } from "../utility/posts";
import Articles from "@/components/articles";
import Date from "../components/date";
import utilStyles from "@/styles/utils.module.css";
import { Article } from "@/types";

interface ArticlesProps {
  allArticlesData: Article[];
}

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
    <Layout pageType="articles">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Articles allArticlesData={allArticlesData} />
    </Layout>
  );
}
