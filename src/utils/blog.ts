import { getCollection } from "astro:content";

export const fetchCollection = async () => await getCollection("post");

async function getStaticPaths() {
  const posts = await fetchCollection();

  return posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
      props: {
        post,
      },
    };
  });
}

export function getPaths() {
  return getStaticPaths();
}