import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { ArticlesProps } from "@/types";

export default function Articles({ allArticlesData }: ArticlesProps) {
  return (
    <div className={`${utilStyles.list}`}>
      {allArticlesData.map(({ id, date, title, description, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <div
            className={`${utilStyles.listItem} ${utilStyles.card} ${utilStyles.cardPadding}`}
          >
            <div className={`${utilStyles.headingMd}`}>{title}</div>
            <p className={utilStyles.smallerText}>{description}</p>
            <small>
              <Date dateString={date} />
            </small>
          </div>
        </a>
      ))}
    </div>
  );
}
