import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { ArticlesProps } from "@/types";

export default function Articles({ allArticlesData }: ArticlesProps) {
  return (
    <div className={`${utilStyles.list}`}>
      {allArticlesData.map(({ id, date, title, content }) => (
        <Link href={`/articles/${id}`} key={id}>
          <div
            className={`${utilStyles.listItem} ${utilStyles.card} ${utilStyles.cardPadding}`}
          >
            <div className={`${utilStyles.headingMd}`}>{title}</div>
            <p className={utilStyles.smallerText}>
              {content && content.substring(0, 250)}...
            </p>
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </div>
        </Link>
      ))}
    </div>
  );
}
