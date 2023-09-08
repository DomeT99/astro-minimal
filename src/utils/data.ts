import type {
  SocialButton,
  MenuOptions,
  GitHubRepo
} from "../types/types";

export const socialButtons: SocialButton[] = [
  {
    icon: "eva:linkedin-outline",
    url: "https://www.linkedin.com/in/domenico-tenace/",
  },
  {
    icon: "eva:github-outline",
    url: "https://github.com/DomeT99",
  },
  {
    icon: "eva:twitter-outline",
    url: "https://twitter.com/dome_tena99",
  },
];

export const menuOptions: MenuOptions[] = [
  {
    label: "BLOG",
    url: "/blog",
  },
  {
    label: "OPEN SOURCE",
    url: "/opensource",
  },
];

export const openSourceProjects: GitHubRepo[] = [
  {
    owner: "vuejs",
    repo: "devtools",
  },
  {
    owner: "Exifly",
    repo: "ApiVault",
  },
  {
    owner: "italia",
    repo: "bootstrap-italia",
  },
  {
    owner: "oruga-ui",
    repo: "oruga",
  },
  {
    owner: "italia-opensource",
    repo: "awesome-italia-opensource",
  }
];

