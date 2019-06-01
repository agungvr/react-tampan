import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import SidebarHeader from "./header";
import SidebarMenu from "./menu";
import SidebarFooter from "./footer";
import SidebarCollapse from "./collapse";
import SidebarItem from "./item";
import { colors, shadows, fonts } from "../../../data/constants";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 230px;
  height: 100%;
  position: fixed;
  box-shadow: ${shadows.idle};
  background-color: ${colors.white};
  font-family: ${fonts.regular};
`;

const Sidebar = ({ children }) => (
  <SidebarContainer>{children}</SidebarContainer>
);

Sidebar.propTypes = {
  children: propTypes.node.isRequired
};

Sidebar.Header = SidebarHeader;
Sidebar.Footer = SidebarFooter;
Sidebar.Collapse = SidebarCollapse;
Sidebar.Menu = SidebarMenu;
Sidebar.Item = SidebarItem;

export default Sidebar;

export {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarCollapse,
  SidebarMenu,
  SidebarItem
};
