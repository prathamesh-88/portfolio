import Head from "next/head";
import Project from "../components/project";
import Layout from "../components/layouts/commonLayout";
import GridLayout from "../components/layouts/gridLayout";

export default function Home() {
  return (
    <Layout pageType="home">
      <Head>
        <title>Projects</title>
      </Head>
      <GridLayout>
        <Project />
        <Project />
        <Project />
      </GridLayout>
    </Layout>
  );
}
