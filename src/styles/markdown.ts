import styled from "styled-components";

export const Markdown = styled.div`
  line-height: 1.5;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }

  hr {
    background: ${(props) => props.theme.background};
    height: 1px;
    border: 0;
  }

  code {
    border: solid 1px ${(props) => props.theme.header};
    background-color: ${(props) => props.theme.background};
    padding: 2px 8px;
    font-size: 0.9em;
    border-radius: 8px;
    font-family: "M PLUS 1 Code", "Noto Sans KR";
    @media (max-width: 768px) {
      padding: 1px 4px;
    }
  }

  em {
    font-style: italic;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 1em;
    margin-bottom: 0.8em;
    line-height: 1.4;
    letter-spacing: -0.025em;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h1 {
    font-weight: 900;
    font-size: 2em;
    margin-top: 1.6em;
  }

  h2 {
    font-size: 1.7em;
  }

  h3 {
    font-size: 1.4em;
  }

  h4 {
    font-size: 1.2em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.833em;
  }

  h1 > a {
    text-decoration: none;
  }

  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
  }

  /* Prose */

  p {
    line-height: 1.625;
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: 0 0 2em 0;
    padding: 0;
    a {
      color: ${(props) => props.theme.text};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  li,
  ol {
    text-indent: -23px;
    padding-left: 20px;
    margin-left: 30px;
    list-style: inside;
  }

  ul,
  ol {
    margin-left: 0;
    margin-right: 0;
    padding: 0;
    margin-bottom: 2em;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: 0;
    margin-bottom: 0.5em;
  }

  li > p {
    margin-bottom: calc(2em / 2);
  }

  li *:last-child {
    margin-bottom: 0;
  }

  li > ul {
    margin-left: 2em;
    margin-top: calc(2em / 2);
  }

  blockquote {
    width: 100%;
    margin-left: -1em;
    margin-right: 2em;
    padding: 0 0 0 1.5em;
    border-left: 0.25em solid #005b99;
    font-size: 1.1em;
    font-style: italic;
    margin-bottom: 2em;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: 2em;
    border-collapse: collapse;
    border-spacing: 0.25em;
  }

  table thead tr th {
    border-bottom: 1px solid ${(props) => props.theme.background};
  }

  /* Link */

  a {
    color: #005b99;
    text-decoration: underline;
  }

  a:hover,
  a:focus {
    text-decoration: none;
  }

  /* Media queries */

  @media (max-width: 42em) {
    blockquote {
      padding: 0 0 0 1em;
      margin-left: 0;
    }
    ul,
    ol {
      list-style-position: inside;
    }
  }
`;
