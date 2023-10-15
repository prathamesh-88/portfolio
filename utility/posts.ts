import { Article } from "@/types";
import fetch from "node-fetch";

interface IDevToArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  url: string;
  published_timestamp: string;
  [k: string]: any;
}

function formatArticle(rawArticle: IDevToArticle): Article {
  return {
    id: rawArticle.id,
    date: rawArticle.published_timestamp,
    url: rawArticle.url,
    title: rawArticle.title,
    description: rawArticle.description,
  };
}

export async function getBlogPosts(): Promise<Article[]> {
  if (!process.env.DEVTO_API_KEY) {
    throw new Error("Dev.to API Key is not set");
  }
  const rawPostsResponse = await fetch("https://dev.to/api/articles/me", {
    headers: {
      "api-key": process.env.DEVTO_API_KEY,
    },
  });
  const rawPosts: IDevToArticle[] =
    (await rawPostsResponse.json()) as IDevToArticle[];
  return rawPosts.map((rawPost) => formatArticle(rawPost));
}
