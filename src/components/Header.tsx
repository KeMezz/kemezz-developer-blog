import React, { useEffect } from "react";
import styled from "styled-components";
import { HiOutlineMenuAlt4, HiCode } from "react-icons/hi";
import { navigate } from "gatsby";

const Container = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: ${(props) => props.theme.header};
  transition: background-color 0.3s;
  @media (max-width: 768px) {
    height: 60px;
  }
`;

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: inherit;
  max-width: 1280px;
  padding: 0 40px;
  svg {
    cursor: pointer;
  }
  @media (max-width: 450px) {
    padding: 0 20px;
  }
`;

const Menu = styled(HiOutlineMenuAlt4)`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Logo = styled(HiCode)`
  font-size: 60px;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ThemeSwitch = styled.div`
  width: 60px;
  height: 33px;
  border: solid 3px ${({ theme }) => theme.text};
  background-color: #ccc;
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    width: 40px;
    height: 22px;
  }
`;

const ToggleCircle = styled.div<{ isDark: boolean }>`
  width: 33px;
  height: 33px;
  border-radius: 30px;
  position: absolute;
  top: -3px;
  left: ${(props) => (props.isDark ? "24px" : "-3px")};
  transition: left 0.3s;
  border: solid 3px ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  @media (max-width: 768px) {
    width: 22px;
    height: 22px;
    left: ${(props) => (props.isDark ? "15px" : "-3px")};
  }
`;

interface iHeader {
  isDark: boolean;
  setIsDark: Function;
}

function Header({ isDark, setIsDark }: iHeader) {
  const toggleTheme = () => setIsDark((prev: boolean) => !prev);
  const goHome = () => navigate("/");

  useEffect(
    () => localStorage.setItem("isDark", JSON.stringify(isDark)),
    [isDark]
  );

  return (
    <Container>
      <Wrapper>
        <Menu />
        <Logo onClick={goHome} />
        <ThemeSwitch onClick={toggleTheme}>
          <ToggleCircle isDark={isDark} />
        </ThemeSwitch>
      </Wrapper>
    </Container>
  );
}

export default Header;
