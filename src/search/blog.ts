import { create, insert } from "@orama/orama";
import { posts } from "../content";

export default async function fill() {
  const blogDB = await create({
    id: "blog",
    schema: {
      title: "string",
      date: "string",
      description: "string",
      url: "string",
    } as const,
  });

  for (const post of posts) {
    await insert(blogDB, {
      title: post.frontmatter.title,
      date: post.frontmatter.date,
      description: post.frontmatter.description,
      url:
        "/blog/" + post.file!.split("src/content/blog/").pop()!.split(".md")[0],
    });
  }

  return {
    instance: blogDB,
    params: {
      tolerance: 1,
      limit: 5,
      boost: {
        title: 5,
        content: 0.1,
      },
    },
  };
}
