import React from "react";
import styles from "../../styles/gridLayout.module.css";

export default function GridLayout({ children }: any) {
  return <div className={`${styles.gridContainer}`}>{children}</div>;
}
