import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { colors } from "../../../data/constants";

const FooterContainer = styled.div`
  position: relative;
  bottom: 0px;
  width: 230px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0px 20px 32px;
`;

const FooterTitle = styled.span`
  letter-spacing: 0;
  font-size: 20px;
  color: ${colors.primaryText};
`;

const FooterSubtitle = styled.span`
  font-size: 12px;
  color: ${colors.primaryText};
`;

const Button = styled.button`
  color: ${colors.blue};
  font-size: 16px;
  margin: 8px 0;
  cursor: pointer;
  border: 0;
  padding: 0;
`;

const SidebarFooter = ({ title, subtitle, logoutClick }) => (
  <FooterContainer>
    <FooterTitle>{title}</FooterTitle>
    <FooterSubtitle>{subtitle}</FooterSubtitle>
    <Button type="button" onClick={logoutClick}>
      Sign Out
    </Button>
  </FooterContainer>
);

SidebarFooter.defaultProps = {
  title: "",
  subtitle: "",
  logoutClick: () => {}
};

SidebarFooter.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  logoutClick: propTypes.func
};

export default SidebarFooter;
