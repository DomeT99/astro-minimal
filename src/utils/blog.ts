import { getCollection } from "astro:content";

export const fetchCollection = async () => await getCollection("post");

export async function getStaticPaths(id: string) {
  const data = await fetch(id).then((response) => response.json());
  return data;
}
