import { create, insert } from "@orama/orama";  

export default async function fill() {
  const blogDB = await create({
    id: "blog",
    schema: {
      title: "string",
      date: "string",
      content: "string",
      url: "string",
    } as const,
  });

  // await insert(blogDB, {
  //   title: computedProps.frontmatter.title,
  //   date: computedProps.frontmatter.date,
  //   content: computedProps.rawContent(),
  //   url: "/blog/computed-properties",
  // });

  return {
    instance: blogDB,
    params: {
      tolerance: 3,
      limit: 5,
      boost: {
        title: 5,
        content: 0.1,
      },
    },
  };
}
