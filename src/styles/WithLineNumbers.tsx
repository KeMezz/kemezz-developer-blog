import React from "react";
import styled from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

const Pre = styled.pre`
  font-family: "M PLUS 1 Code", "Noto Sans KR";
  font-weight: 500;
  text-align: left;
  margin: 1em 0;
  padding: 18px;
  overflow-x: auto;
  border-radius: 10px;
  white-space: pre;
  table-layout: fixed;
  scrollbar-width: none;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

interface WithLineNumbers {
  children: string;
  className: string;
}

const WithLineNumbers = ({ children, className }: WithLineNumbers) => {
  const language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop();
        return (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </LineContent>
              </Line>
            ))}
          </Pre>
        );
      }}
    </Highlight>
  );
};

export default WithLineNumbers;
