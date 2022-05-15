import React from "react";
import Layout from "../layouts/Layout";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import { FaRegCalendar } from "react-icons/fa";
import { Markdown } from "../styles/markdown";
import WithLineNumbers from "../styles/WithLineNumbers";

interface PostTemplateProps {
  children: JSX.Element;
  pageContext: {
    frontmatter: {
      date: string;
      description: string;
      title: string;
      tech: string[];
    };
  };
}

const PageHead = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 280px;
  gap: 18px;
  text-align: center;
  line-height: 1.5;
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
  h1 {
    font-size: 30px;
    font-weight: 900;
    @media (max-width: 1024px) {
      font-size: 26px;
    }
  }
  h3 {
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;
const PageBody = styled.section`
  display: flex;
  gap: 30px;
  margin-bottom: 80px;
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const Post = styled.section`
  width: 810px;
  background-color: ${(props) => props.theme.header};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 50px 55px;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    padding: 30px 34px;
    border-radius: 0;
  }
  @media (max-width: 450px) {
    padding: 30px 20px;
  }
`;
const PostHead = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  line-height: 1.5;
  position: relative;
  padding-bottom: 26px;
  &::after {
    content: "";
    position: absolute;
    width: calc(100% - 12px);
    height: 2px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${(props) => props.theme.subText};
  }
  @media (max-width: 1024px) {
    font-size: 24px;
    padding-bottom: 14px;
  }
`;
const PostDate = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 6px;
  padding-top: 16px;
  font-size: 14px;
  color: ${(props) => props.theme.subText};
`;
const PostBody = styled(Markdown)`
  padding-top: 34px;
`;
const Addon = styled.section`
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 1300px) {
    flex-direction: row;
  }
  @media (max-width: 1024px) {
    padding: 0;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 18px;
  }
  div {
    width: 360px;
    background-color: ${(props) => props.theme.header};
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 26px 42px;
    @media (max-width: 1300px) {
      width: 100%;
    }
    @media (max-width: 768px) {
      border-radius: 0;
    }
    h2 {
      font-size: 24px;
      font-weight: bold;
      padding-bottom: 0.6em;
    }
  }
`;
const TechLists = styled.div`
  ul,
  li {
    list-style: none;
  }
  li {
    padding: 20px 0;
    font-size: 18px;
  }
`;
const TechImg = styled.img``;
const IndexLists = styled.div`
  position: sticky;
  top: 22px;
`;

const components = {
  code: WithLineNumbers,
};

function PostTemplate({
  pageContext: { frontmatter },
  children,
}: PostTemplateProps) {
  return (
    <Layout>
      <PageHead>
        <h1>{frontmatter.title}</h1>
        <h3>{frontmatter.description}</h3>
      </PageHead>
      <PageBody>
        <Post>
          <PostHead>
            <PostTitle>{frontmatter.title}</PostTitle>
            <PostDate>
              <FaRegCalendar />
              {frontmatter.date}에 작성
            </PostDate>
          </PostHead>
          <PostBody>
            <MDXProvider components={components}>{children}</MDXProvider>
          </PostBody>
        </Post>
        <Addon>
          <TechLists>
            <h2>기술</h2>
            <ul>
              {frontmatter.tech.map((item) => (
                <>
                  <TechImg src="" />
                  <li key={item}>{item}</li>
                </>
              ))}
            </ul>
          </TechLists>
          <IndexLists>
            <h2>목차</h2>
          </IndexLists>
        </Addon>
      </PageBody>
    </Layout>
  );
}

export default PostTemplate;
