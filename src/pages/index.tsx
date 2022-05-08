import { graphql, navigate, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../layouts/Layout";
import { FaRegCalendar } from "react-icons/fa";
import { motion } from "framer-motion";

const Container = styled.section`
  padding: 60px 0;
`;

const RecentTitle = styled.h1`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 26px;
  margin-left: 14px;
`;

const PostLists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  row-gap: 40px;
  @media (max-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 880px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Post = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 220px;
  background-color: ${(props) => props.theme.header};
  border-radius: 20px;
  padding: 28px;
  line-height: 1.4;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  @media (max-width: 880px) {
    height: 160px;
  }
  h1 {
    font-size: 20px;
    font-weight: bold;
    padding-bottom: 12px;
    height: 70px;
    @media (max-width: 880px) {
      height: 40px;
    }
  }
  p {
    font-size: 14px;
    color: ${(props) => props.theme.subText};
  }
`;

const PostDate = styled.div`
  margin-top: auto;
  gap: 12px;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.subText};
`;

interface mdxQuery {
  allMdx: {
    edges: {
      node: {
        fileAbsolutePath: string;
        frontmatter: {
          date: string;
          description: string;
          title: string;
        };
        headings: {
          value: string;
          depth: number;
        }[];
        internal: {
          content: string;
        };
        id: string;
      };
    }[];
  };
}

function Home() {
  const {
    allMdx: { edges },
  } = useStaticQuery<mdxQuery>(graphql`
    {
      allMdx {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              date
              description
              title
            }
            headings {
              value
              depth
            }
            internal {
              content
            }
            id
          }
        }
      }
    }
  `);

  const navigateToPost = (fileAbsolutePath: string) => {
    const year =
      fileAbsolutePath.split("/")[fileAbsolutePath.split("/").length - 2];
    const fileName = fileAbsolutePath
      .split("/")
      [fileAbsolutePath.split("/").length - 1].split(".")[0];
    navigate(`/${year}/${fileName}`);
  };

  return (
    <Layout>
      <Container>
        <RecentTitle>최근에 올라온 포스트</RecentTitle>
        <PostLists>
          {edges.map(({ node: { frontmatter, fileAbsolutePath } }, index) => {
            const title =
              frontmatter.title.length > 45
                ? frontmatter.title.slice(0, 45) + "..."
                : frontmatter.title;
            const description =
              frontmatter.description.length > 90
                ? frontmatter.description.slice(0, 90) + "..."
                : frontmatter.description;
            const date = `${new Date(
              frontmatter.date
            ).getFullYear()}년 ${new Date(
              frontmatter.date
            ).getMonth()}월 ${new Date(frontmatter.date).getDay()}일`;
            return (
              <Post
                key={index}
                onClick={() => navigateToPost(fileAbsolutePath)}
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
              >
                <h1>{title}</h1>
                <p>{description}</p>
                <PostDate>
                  <FaRegCalendar />
                  <p>{date}</p>
                </PostDate>
              </Post>
            );
          })}
        </PostLists>
      </Container>
    </Layout>
  );
}

export default Home;
