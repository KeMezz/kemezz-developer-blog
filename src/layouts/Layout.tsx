import React, { useLayoutEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/reset.css";

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
  }
`;

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  min-height: calc(100vh - 340px);
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;

interface iLayout {
  children: JSX.Element | JSX.Element[];
}

function Layout({ children }: iLayout) {
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    if (localStorage.getItem("isDark") === "true") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Container>{children}</Container>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
