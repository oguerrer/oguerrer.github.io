import { getCollection } from "astro:content";

export async function getCategories() {
  const categories = await getCollection("categories");
  return categories;
}

export async function getPosts() {
  const posts = (await getCollection("research")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return posts;
}

export async function getPostsByCategory(category: string) {
  const posts = (await getCollection("research"))
    .filter((post) => post.data.category === category)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return posts;
}