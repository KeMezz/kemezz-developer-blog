import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Hyeongjin Developer Blog`,
    description: `개발자 정형진의 블로그입니다. 현재 테스트 상태로 운영 중입니다.`,
    siteUrl: `https://www.kemezz.com`,
    image: `./src/images/meta/og-thumbnail.jpg`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
