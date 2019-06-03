import React, { memo } from "react";
import styled from "styled-components";
import { Row, Column } from "../grid";
import Button from "../button/module";
import { colors } from "../../data/constants";

const logo = require("../../assets/images/logo.png");

const Wrapper = styled.header`
  position: fixed;
  z-index: 997;
  top: 0;
  left: 0;
  width: 100%;
  height: 62px;
  background-color: #fff;
  -webkit-transition: height 0.5s ease-in-out;
  -o-transition: height 0.5s ease-in-out;
  transition: height 0.5s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
`;

const Container = styled(Row)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 32px;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 100%;

  img {
    width: 36px;
    height: auto;
    margin-right: 10px;
  }

  span {
    /* font-size: 18px; */
    position: relative;
    color: #4e5b60;
    padding-left: 12px;
    /* font-family: Linotte-Semi-Bold; */

    :before {
      content: "";
      position: absolute;
      left: 0px;
      width: 1px;
      height: 100%;
      background-color: #4e5b60;
    }
  }
`;

const MenuContainer = styled(Column)`
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled(Column)`
  display: flex;
  justify-content: flex-end;
`;

const Search = styled.div`
  display: flex;
  width: 50%;

  input {
    height: 30px;
    padding: 0 10px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
    padding: 10px 10px;
    font-size: 12px;
    color: #6a7c95;
    margin: 5px 0;
    width: 100%;
    box-sizing: border-box;
    font-family: "Linotte";

    :focus {
      outline: none;
      border-color: ${colors.primary.base};
    }
  }
`;

const Header = memo(() => {
  return (
    <Wrapper>
      <Container>
        <Column lg={4}>
          <LogoContainer>
            <img alt="Anime Tampan" src={logo} />
            <span>Anime Tampan</span>
          </LogoContainer>
        </Column>
        <MenuContainer lg={4}>
          <Button
            size="tiny"
            borderRadius="3px"
            padding="8px 10px"
            margin="0px 5px"
          >
            Home
          </Button>
          <Button
            inverse
            size="tiny"
            borderRadius="3px"
            padding="8px 10px"
            margin="0px 5px"
          >
            Anime List
          </Button>
          <Button
            inverse
            size="tiny"
            borderRadius="3px"
            padding="8px 10px"
            margin="0px 5px"
          >
            On Going
          </Button>
          <Button
            inverse
            size="tiny"
            borderRadius="3px"
            padding="8px 10px"
            margin="0px 5px"
          >
            Genre
          </Button>
          <Button
            inverse
            size="tiny"
            borderRadius="3px"
            padding="8px 10px"
            margin="0px 5px"
          >
            Pasang Iklan
          </Button>
        </MenuContainer>
        <SearchContainer lg={4}>
          <Search>
            <input placeholder="Cari Anime" />
          </Search>
        </SearchContainer>
      </Container>
    </Wrapper>
  );
});

export default Header;
