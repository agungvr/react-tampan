import React, { memo } from "react";
import styled from "styled-components";

const logo = require("../../assets/images/logo.png");

const Wrapper = styled.header`
  position: fixed;
  z-index: 997;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fff;
  -webkit-transition: height 0.5s ease-in-out;
  -o-transition: height 0.5s ease-in-out;
  transition: height 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 8px 0px;
`;

const Container = styled.div`
  padding-right: 12px;
  padding-left: 12px;
  margin-right: auto;
  margin-left: auto;
  height: 100%;

  @media (min-width: 71.313em) {
    width: 1140px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }

  h3 {
    font-family: fantasy;
    color: #535353;
  }
`;

const Header = memo(() => {
  return (
    <Wrapper>
      <Container>
        <LogoContainer>
          <img alt="Anime Tampan" src={logo} />
          <h3>Header</h3>
        </LogoContainer>
      </Container>
    </Wrapper>
  );
});

export default Header;
