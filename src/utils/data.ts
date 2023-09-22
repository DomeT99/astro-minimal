import type {
  SocialButton,
  MenuOptions,
  GitHubRepository,
} from "../types/types";

export const socialButtons: SocialButton[] = [
  {
    icon: "fa-brands:linkedin",
    url: "https://www.linkedin.com/in/domenico-tenace/",
  },
  {
    icon: "fa-brands:github",
    url: "https://github.com/DomeT99",
  },
  {
    icon: "fa-brands:dev",
    url: "https://dev.to/dvalin99",
  },
  {
    icon: "fa-brands:mastodon",
    url: "https://mastodon.uno/@dvalin99",
  },
];

export const menuOptions: MenuOptions[] = [
  {
    label: "HOME",
    url: "/",
  },
  {
    label: "BLOG",
    url: "/blog",
  },
  {
    label: "OPEN SOURCE",
    url: "/opensource",
  },
];

export const repArray: GitHubRepository[] = [
  {
    id: 1,
    full_name: "vuejs/core",
    html_url: "https://github.com/vuejs/core",
    description:
      "🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.",
  },
  {
    id: 2,
    full_name: "vuejs/router",
    html_url: "https://github.com/vuejs/router",
    description: "🚦 The official router for Vue.js",
  },
  {
    id: 3,
    full_name: "vuejs/pinia",
    html_url: "https://github.com/vuejs/pinia",
    description:
      "🍍 Intuitive, type safe, light and flexible Store for Vue using the composition api with DevTools support",
  },

  {
    id: 4,
    full_name: "withastro/astro",
    html_url: "https://github.com/withastro/astro",
    description:
      "The web framework that scales with you — Build fast content sites, powerful web applications, dynamic server APIs, and everything in-between ⭐️ Star to support our work!",
  },
  {
    id: 5,
    full_name: "withastro/docs",
    html_url: "https://github.com/withastro/docs",
    description: "Astro documentation",
  },
  {
    id: 6,
    full_name: "withastro/compiler",
    html_url: "https://github.com/withastro/compiler",
    description: "The Astro v1.0 compiler. Written in Go, distributed as WASM.",
  },
];
