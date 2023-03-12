import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { AppProps } from '@/types';

export default function Articles({ allPostsData } : AppProps) {
  return (
    <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Articles</h2>
      <ul className={`${utilStyles.list}`}>
        {allPostsData.map(({ id, date, title }) => (
          <li className={`${utilStyles.listItem}  ${utilStyles.card}`} key={id}>
            <Link href={`/articles/${id}`}>
              {title}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
