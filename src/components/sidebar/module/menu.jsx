import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const NavContainer = styled.div`
  margin: 10px 0px;
  flex: 1;
  overflow-y: hidden;

  &:hover {
    overflow-y: scroll;
  }
`;

const SidebarMenu = ({ children, active, onClick }) => {
  const newChildren = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      index,
      active,
      onClick
    })
  );
  return <NavContainer>{newChildren}</NavContainer>;
};

SidebarMenu.defaultProps = {
  onClick: () => {}
};

SidebarMenu.propTypes = {
  children: propTypes.node.isRequired,
  active: propTypes.string.isRequired,
  onClick: propTypes.func
};

export default SidebarMenu;
