export interface Article {
  id: string;
  date: string;
  title: string;
  content?: string;
  contentHtml?: string;
}

export interface Project {
  id: string;
  link: string;
  date: string;
  title: string;
  description: string;
  image?: string;
}
export interface ArticlesProps {
  allArticlesData: Article[];
}

export interface ProjectsProps {
  allProjectsData: Project[];
}
