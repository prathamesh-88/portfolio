import Head from "next/head";
import Layout, { siteTitle } from "@/components/layouts/commonLayout";
import { getSortedPostsData } from "../utility/posts";
import Articles from "@/components/articles";
import { AppProps } from "@/types";

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
      <Articles allPostsData={allPostsData} />
    </Layout>
  );
}
