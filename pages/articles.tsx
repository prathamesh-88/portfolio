import Head from "next/head";
import Layout from "@/components/layouts/commonLayout";
import { getSortedPostsData } from "../utility/posts";
import Articles from "@/components/articles";
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
        <title>Articles</title>
      </Head>
      <Articles allArticlesData={allArticlesData} />
    </Layout>
  );
}
