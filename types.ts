export interface postFormat {
  id: string;
  date: string;
  title: string;
  contentHtml: string;
}

export interface AppProps {
  allPostsData: postFormat[];
}
