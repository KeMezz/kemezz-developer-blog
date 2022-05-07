import React from "react";
import styled from "styled-components";
import { HiOutlineMenuAlt4, HiCode } from "react-icons/hi";

const Container = styled.header`
  display: flex;
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.header};
  transition: background-color 0.3s;
  /* box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08); */
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
`;

interface iHeader {
  isDark: boolean;
  setIsDark: Function;
}

function Header({ isDark, setIsDark }: iHeader) {
  const toggleTheme = () => setIsDark((prev: boolean) => !prev);
  return (
    <Container>
      <Wrapper>
        <HiOutlineMenuAlt4 style={{ fontSize: 40, cursor: "pointer" }} />
        <HiCode style={{ fontSize: 60 }} />
        <ThemeSwitch onClick={toggleTheme}>
          <ToggleCircle isDark={isDark} />
        </ThemeSwitch>
      </Wrapper>
    </Container>
  );
}

export default Header;
