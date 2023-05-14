import Head from "next/head";
import Projects from "../components/projects";
import Layout from "../components/layouts/commonLayout";
import { getProjects } from "@/utility/projects";
import { Project } from "@/types";

interface ProjectsProps {
  allProjectsData: Project[];
}

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: {
      allProjectsData: projects,
    },
  };
}

export default function ProjectsPage({ allProjectsData }: ProjectsProps) {
  return (
    <Layout pageType="projects">
      <Head>
        <title>Projects</title>
      </Head>
      <Projects allProjectsData={allProjectsData} />
    </Layout>
  );
}
