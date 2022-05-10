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
  h1 {
    font-size: 30px;
    font-weight: 900;
  }
  h3 {
    width: 50%;
  }
`;
const PageBody = styled.section`
  display: flex;
  gap: 30px;
  margin-bottom: 80px;
`;
const Post = styled.section`
  width: 810px;
  background-color: ${(props) => props.theme.header};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 50px 55px;
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
  gap: 36px;
  div {
    position: sticky;
    top: 22px;
    width: 360px;
    background-color: ${(props) => props.theme.header};
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
    border-radius: 20px;
    padding: 26px 42px;
  }
`;

const components = {
  code: WithLineNumbers,
};

function PostTemplate({ pageContext, children }: PostTemplateProps) {
  const { frontmatter } = pageContext;
  const year = new Date(frontmatter.date).getFullYear();
  const month = new Date(frontmatter.date).getMonth();
  const day = new Date(frontmatter.date).getDay();
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
              {year}년 {month}월 {day}일에 작성
            </PostDate>
          </PostHead>
          <PostBody>
            <MDXProvider components={components}>{children}</MDXProvider>
          </PostBody>
        </Post>
        <Addon>
          <div></div>
          <div></div>
        </Addon>
      </PageBody>
    </Layout>
  );
}

export default PostTemplate;
