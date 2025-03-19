import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import icon from "astro-icon";

export default defineConfig({
  integrations: [vue(), icon()],
});
