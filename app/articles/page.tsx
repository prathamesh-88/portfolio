import Layout from "@/components/layouts/commonLayout";
import Articles from "@/components/articles";
import { getBlogPosts } from "@/utility/posts";
export default async function ArticlesPage() {
  return (
    <Layout pageType="articles">
      <Articles allArticlesData={await getBlogPosts()} />
    </Layout>
  );
}
