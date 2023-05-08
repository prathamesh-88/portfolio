export interface postFormat {
  id: string;
  date: string;
  title: string;
  content?: string;
  contentHtml: string;
}

export interface Project {
  id: number;
  name: string;
}

export interface AppProps {
  allPostsData?: postFormat[];
  projectData?: Project[];
}
