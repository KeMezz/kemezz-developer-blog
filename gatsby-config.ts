import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hyeongjin Developer Blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "pages", path: "./src/pages" },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "posts", path: "./src/posts" },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "images", path: "./src/images" },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: { path: "./src/posts" },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: path.resolve("./src/templates/PostTemplate.tsx"),
        },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1200 },
          },
        ],
      },
    },
  ],
};

export default config;
