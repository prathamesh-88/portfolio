import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import { AppProps } from "@/types";

export default function Articles({ allPostsData }: AppProps) {
  return (
    <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Articles</h2>
      <ul className={`${utilStyles.list}`}>
        {allPostsData &&
          allPostsData.map(({ id, date, title, content }) => (
            <Link href={`/articles/${id}`} key={id}>
              <li
                className={`${utilStyles.listItem} ${utilStyles.card} ${utilStyles.cardPadding}`}
              >
                {title}
                <br />
                <p className={utilStyles.smallerText}>
                  {content && content.substring(0, 250)}...
                </p>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            </Link>
          ))}
      </ul>
    </div>
  );
}
