export interface Article {
  id: number;
  url: string;
  date: string;
  title: string;
  description: string;
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

export interface HomeProps {
  allArticlesData: Article[];
  allProjectsData: Project[];
}
