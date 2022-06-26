import React from "react";
import Layout from "../layouts/Layout";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import { FaRegCalendar } from "react-icons/fa";
import { Markdown } from "../styles/markdown";
import WithLineNumbers from "../styles/WithLineNumbers";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

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

interface ITechlistsImages {
  allFile: {
    edges: {
      node: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData;
        };
        name: string;
      };
    }[];
  };
}

const components = {
  code: WithLineNumbers,
};

function PostTemplate({
  pageContext: { frontmatter },
  children,
}: PostTemplateProps) {
  const {
    allFile: { edges: techlistsImages },
  } = useStaticQuery<ITechlistsImages>(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "techlists" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(width: 36)
            }
            name
          }
        }
      }
    }
  `);

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
            {frontmatter.tech.map((techName) => {
              const targetTech = techlistsImages.filter(
                (techlist) => techlist.node.name === techName
              );
              const image = getImage(
                targetTech[0].node.childImageSharp.gatsbyImageData
              );
              return (
                <ul key={techName}>
                  <>
                    <GatsbyImage
                      image={image}
                      alt={techName}
                      style={{
                        borderRadius: 4,
                        boxShadow: "0 2px 2px rgba(0,0,0,0.1)",
                      }}
                    />
                    <li key={techName}>{techName}</li>
                  </>
                </ul>
              );
            })}
          </TechLists>
        </Addon>
      </PageBody>
    </Layout>
  );
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
`;
const TechLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 360px;
  background-color: ${(props) => props.theme.header};
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
  padding: 30px 38px;
  @media (max-width: 1300px) {
    width: 100%;
  }
  @media (max-width: 1024px) {
    border-radius: 0;
    padding: 30px 20px;
  }
  h2 {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 0.6em;
  }
  ul {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  ul,
  li {
    list-style: none;
  }
  li {
    line-height: 1.4;
    font-size: 18px;
    font-weight: bold;
    @media (max-width: 1024px) {
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export default PostTemplate;
