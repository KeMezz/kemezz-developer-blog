import React from "react";
import styled from "styled-components";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Container = styled.footer`
  width: 100vw;
  height: 260px;
  background-color: ${(props) => props.theme.header};
  transition: background-color 0.3s;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;
  height: inherit;
  max-width: 1280px;
  padding: 0 40px;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  h1 {
    font-weight: 900;
    font-size: 30px;
    padding-bottom: 18px;
  }
  p {
    font-size: 14px;
  }
`;

const Links = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 24px;
  font-size: 30px;
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <Texts>
          <h1>Hyeongjin Developer Blog</h1>
          <p>
            이 블로그가 포함하고 있는 모든 콘텐츠의 허가 없는 무단 전제 및
            배포를 금합니다.
          </p>
          <p>Copyright 2022. Hyeong Jin. All rights reserved.</p>
        </Texts>
        <Links>
          <FaGithub />
          <FaInstagram />
          <FaTwitter />
        </Links>
      </Wrapper>
    </Container>
  );
}

export default Footer;
