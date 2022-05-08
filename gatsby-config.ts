import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hyeongjin Developer Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "pages", path: "./src/pages" },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "posts", path: "posts" },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: { path: "posts" },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: path.resolve("./src/templates/PostTemplate.tsx"),
        },
        extensions: [`.mdx`, `.md`],
      },
    },
  ],
};

export default config;
