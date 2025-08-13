import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

//import oneMonokai from "./src/theme/one-monokai-prism-theme.json";

const config: Config = {
  title: "C-Script Docs",
  tagline: "Typescript Ergonomics. C++ Power.",
  favicon: "img/favicon.ico",

  url: "https://BellJrDev.github.io",
  baseUrl: "/C-Script-Docs/",

  organizationName: "BellJrDev",
  projectName: "C-Script-Docs",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          routeBasePath: "docs",
          editUrl: "https://github.com/BellJrDev/C-Script-Docs/edit/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oneDark,
    },
    colorMode: {
      defaultMode: "light",
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
