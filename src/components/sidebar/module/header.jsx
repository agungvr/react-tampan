import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { colors } from "../../../data/constants";

const HeaderContainer = styled.div`
  margin: 32px 0px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 64px;
  height: 64px;
`;

const LogoName = styled.span`
  margin-top: 16px;
  color: ${colors.primaryText};
`;

const SidebarHeader = ({ title, imageUrl }) => (
  <HeaderContainer>
    <LogoImage src={imageUrl} />
    <LogoName>{title}</LogoName>
  </HeaderContainer>
);

SidebarHeader.defaultProps = {
  title: "",
  imageUrl: ""
};

SidebarHeader.propTypes = {
  title: propTypes.string,
  imageUrl: propTypes.string
};

export default SidebarHeader;
