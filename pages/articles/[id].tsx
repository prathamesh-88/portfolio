import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layouts/commonLayout";
import utilStyles from "../../styles/utils.module.css";
import { getAllPostIds, getPostData } from "../../utility/posts";
import { PostFormat } from "@/types";

export default function Post({ postData }: { postData: PostFormat }) {
  return (
    <Layout pageType="blog">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div
          className={utilStyles.justifyText}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml ?? "" }}
        />
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
