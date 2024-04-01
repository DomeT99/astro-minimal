import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import vue from "@astrojs/vue";

export default defineConfig({
  integrations: [mdx(), vue()],
});
