import { ProjectsProps } from "@/types";
import Project from "./project";
import utilStyles from "@/styles/utils.module.css";

export default function Projects({ allProjectsData }: ProjectsProps) {
  return (
    <div className={`${utilStyles.list}`}>
      {allProjectsData.map((projectData) => (
        <Project projectData={projectData} key={projectData.id} />
      ))}
    </div>
  );
}
