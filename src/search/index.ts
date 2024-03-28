import { search } from "@orama/orama";
import getBlogDB from "./blog";

export const blogDB = await getBlogDB();

export default async function (term: string) {
  const result = [];

  for (let db of [blogDB]) {
    result.push({
      id: db.instance.id,
      output: search(db.instance, {
        term,
        ...db.params,
      }),
    });
  }

  // wait for all output and then get the output.hits
  return (await Promise.all(result.map((r) => r.output)))
    .map((r) => r.hits)
    .flat()
    .sort((a, b) => {
      return b.score - a.score;
    });
}
