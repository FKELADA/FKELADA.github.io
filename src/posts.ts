import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./i18n";

export type Post = CollectionEntry<"blog">;

/** Published posts in one language, newest first. Ids look like "en/my-post". */
export async function postsIn(lang: Lang): Promise<Post[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft && data.lang === lang);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function slugOf(post: Post) {
  return post.id.split("/").slice(1).join("/");
}
