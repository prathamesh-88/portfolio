import Link from "next/link";
import React from "react";
import Image from "next/image";
import Date from "./date";
import styles from "../styles/project.module.css";
import utilStyles from "../styles/utils.module.css";
import { AppProps } from "../types";

export default function Project({ projectData }: AppProps) {
  return (
    <div className={`${utilStyles.card}`}>
      <div className={`${styles.projectContainer}`}>
        <div className={`${styles.imageContainer}`}>
          <Image
            priority
            height={500}
            width={500}
            className={styles.image}
            src="/images/profile.jpg"
            alt=""
          />
        </div>
        <div className={`${styles.metadata}`}>
          <div className={`${styles.title}`}>
            <h2 className={`${utilStyles.headingLg}`}>Prathamesh</h2>
          </div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            cum numquam harum, officiis, ipsa distinctio temporibus,
            consequuntur reiciendis ea dignissimos id laborum aliquid eos
            placeat quo aliquam incidunt delectus rem.
          </div>
        </div>
      </div>
    </div>
  );
}
