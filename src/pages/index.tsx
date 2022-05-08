import { graphql, navigate, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../layouts/Layout";
import { FaRegCalendar } from "react-icons/fa";

const Container = styled.section`
  padding: 80px 0;
`;

const RecentTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const PostLists = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  row-gap: 40px;
`;

const Post = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 280px;
  background-color: ${(props) => props.theme.header};
  border-radius: 20px;
  padding: 38px;
  line-height: 1.4;
  h1 {
    font-size: 30px;
    font-weight: bold;
    padding-bottom: 16px;
  }
  p {
    font-size: 18px;
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
    const targetLink = fileAbsolutePath
      .split("/")
      [fileAbsolutePath.split("/").length - 1].split(".")[0];
    navigate(`/${targetLink}`);
  };

  return (
    <Layout>
      <Container>
        <RecentTitle>최근에 올라온 포스트</RecentTitle>
        <PostLists>
          {edges.map(({ node: { frontmatter, fileAbsolutePath } }, index) => {
            const title =
              frontmatter.title.length > 48
                ? frontmatter.title.slice(0, 48) + "..."
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
