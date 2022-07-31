import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `KeMezz Dev Blog`,
    description: `개발자 정형진의 블로그입니다. 현재 테스트 상태로 운영 중입니다.`,
    siteUrl: `https://www.kemezz.com`,
    image: `./src/images/meta/og-thumbnail.jpg`,
    twitterUsername: `@@cJLNPm7bTcL2ebv`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "KeMezz Developer Blog",
        short_name: "KeMezz Blog",
        start_url: "/",
        background_color: "#dfe4ea",
        theme_color: "#f4f4f4",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/meta/profile_big.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
};

export default config;
