import React from "react";
import styled, { css } from "styled-components";
import propTypes from "prop-types";
import { colors, fonts } from "../../../data/constants";

export const NavText = styled.span`
  color: ${colors.primaryText};
  font-size: 14px;
`;

export const Nav = styled.div`
  margin: 0px 0px 0px 32px;
  display: flex;
  align-items: center;
  padding: 10px 0px;

  &:before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    position: relative;
    margin-right: 16px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 100%;
    background-color: #d8d8d8;
    border: 1px solid #979797;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover ${NavText} {
    color: ${colors.blue};
  }

  ${props =>
    props.active &&
    css`
      &:after {
        content: "";
        display: inline-block;
        width: 5px;
        height: 30px;
        position: absolute;
        background-color: ${colors.blue};
        left: 0px;
      }
    `}

  ${NavText} {
    color: ${props => (props.active ? colors.blue : null)};
    font-family: ${props => (props.active ? fonts.semiBold : fonts.regular)};
  }
`;

class SidebarItem extends React.Component {
  navClick = item => () => {
    const { onClick } = this.props;
    onClick(item.url, item);
  };

  render() {
    const { item, active } = this.props;
    return (
      <Nav
        key={item.id}
        active={active === item.url}
        onClick={this.navClick(item)}
      >
        <NavText>{item.title}</NavText>
      </Nav>
    );
  }
}

SidebarItem.defaultProps = {
  active: "",
  item: {},
  onClick: () => {}
};

SidebarItem.propTypes = {
  active: propTypes.string,
  item: propTypes.objectOf(propTypes.any),
  onClick: propTypes.func
};

export default SidebarItem;
