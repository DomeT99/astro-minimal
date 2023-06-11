import {
  SocialButton,
  MenuOptions,
  PageData,
  LatestArticles,
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
    label: "PROJECTS",
    url: "/projects",
  },
  {
    label: "OPEN SOURCE",
    url: "/opensource",
  },
];

export const indexData: PageData = {
  title: "Software Developer",
  description:
    "Hi nice to meet you! I'm Domenico and I'm a Software Developer.",
};

export const openSourceData: PageData = {
  title: "Open Source",
  description: "Some Open Source projects that I've contributed!",
};

export const projectsData:PageData = {
  title: "Projects",
  description: "Some projects that I've build!",
}

export const latestArticles: LatestArticles[] = [
  {
    image: "https://picsum.photos/200/300",
    placeholder: "Daje",
    title: "Scaffolding a Vue 3 project using create-vue ⚡️",
    url: "/opensource",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ratione, necessitatibus quidem laborum mollitia molestiae ducimus perferendis veniam autem eveniet quae! Rem sit accusantium ipsa magnam odio eaque debitis atque.",
    date: "01-01-2022",
  },
  {
    image: "https://picsum.photos/200/300",
    placeholder: "Daje",
    title: "Scaffolding a Vue 3 project using create-vue ⚡️",
    url: "/opensource",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ratione, necessitatibus quidem laborum mollitia molestiae ducimus perferendis veniam autem eveniet quae! Rem sit accusantium ipsa magnam odio eaque debitis atque.",
    date: "01-01-2022",
  },
  {
    image: "https://picsum.photos/200/300",
    placeholder: "Daje",
    title: "Scaffolding a Vue 3 project using create-vue e create-react-app e npx e .NET Core ⚡️",
    url: "/opensource",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ratione, necessitatibus quidem laborum mollitia molestiae ducimus perferendis veniam autem eveniet quae! Rem sit accusantium ipsa magnam odio eaque debitis atque.",
    date: "01-01-2022",
  },
  {
    image: "https://picsum.photos/200/300",
    placeholder: "Daje",
    title: "Scaffolding a Vue 3 project using create-vue ⚡️",
    url: "/opensource",
    description:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ratione, necessitatibus quidem laborum mollitia molestiae ducimus perferendis veniam autem eveniet quae! Rem sit accusantium ipsa magnam odio eaque debitis atque.",
    date: "01-01-2022",
  }
];
