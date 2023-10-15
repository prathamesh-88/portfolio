import Image from "next/image";
import { Project } from "@/types";
import Date from "./date";
import styles from "@/styles/project.module.css";
import utilStyles from "@/styles/utils.module.css";

interface ProjectProps {
  projectData: Project;
}

export default function ProjectComponent({ projectData }: ProjectProps) {
  const { id, date, title, link, description, image } = projectData;
  return (
    <a href={link} target="_blank" key={id} rel="noreferrer">
      <div
        className={`${utilStyles.listItem} ${utilStyles.card} ${styles.projectContainer}`}
      >
        <div className={`${styles.imageContainer}`}>
          <Image
            className={`${styles.image}`}
            src={image ?? "/projects/image.jpg"}
            height={150}
            width={150}
            alt=""
          />
        </div>
        <div className={`${styles.metadata}`}>
          <div className={`${utilStyles.headingMd} ${styles.title}`}>
            {title}
          </div>
          <p className={`${styles.description} ${utilStyles.smallerText}`}>
            {description}
          </p>
          <small className={`${styles.date}`}>
            <Date dateString={date} />
          </small>
        </div>
      </div>
    </a>
  );
}
