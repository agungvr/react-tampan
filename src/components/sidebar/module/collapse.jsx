import React from "react";
import styled, { css } from "styled-components";
import propTypes from "prop-types";
import { colors, fonts } from "../../../data/constants";
import IconArrowDown from "./ic_arrow-down.svg";
import IconArrowDownBlue from "./ic_arrow-down-blue.svg";
import { Nav, NavText } from "./item";

const NavSubText = styled.div`
  color: ${colors.primaryText};
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const NavCollapse = styled.div`
  padding: 10px 0;
  background-color: ${props => (props.expand ? "#edf6fe" : null)};

  ${props =>
    props.expand &&
    css`
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
    `}

  ${Nav} {
    padding: 0px;
    /* margin: 0px 0px 0px 32px; */
  }

  &:hover ${NavText} {
    color: ${colors.blue};
  }
`;

const NavChildren = styled.div`
  padding: 0px 0px 10px 70px;
  position: relative;

  :first-child {
    padding: 10px 0px 10px 70px;
  }

  :last-child {
    padding: 0px 0px 0px 70px;
  }

  ${NavSubText} {
    color: ${props => (props.active ? colors.blue : colors.primaryText)};
    font-family: ${props => (props.active ? fonts.semiBold : fonts.regular)};

    &:hover {
      color: ${colors.blue};
    }
  }

  ${props =>
    props.active &&
    css`
      &:before {
        content: "";
        display: inline-block;
        width: 4px;
        height: 20px;
        position: absolute;
        background-color: ${colors.blue};
        left: 0px;
      }
    `}
`;

const NavContent = styled.div`
  position: relative;
  max-height: ${props => (props.expand ? `${props.index * 20}px` : "0")};
  overflow: hidden;
  transition: max-height 0.2s ease-in-out 0s;
`;

const ArrowDown = styled.img`
  margin-left: 5px;
  transform: ${props => (props.expand ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease 0s;
`;

class SidebarCollapse extends React.Component {
  constructor(props) {
    super(props);
    const { data, active } = props;
    const isActive = data.menu.find(x => x.url === active);
    this.state = {
      show: !!isActive,
      icon: IconArrowDown
    };
  }

  toogleClick = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  };

  onFocus = () => {};

  onBlur = () => {};

  onHover = icon => () => {
    this.setState({ icon });
  };

  navClick = item => () => {
    const { onClick } = this.props;
    onClick(item.url, item);
  };

  render() {
    const { data, active } = this.props;
    const { show, icon } = this.state;
    return (
      <NavCollapse
        expand={show}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onMouseOver={this.onHover(IconArrowDownBlue)}
        onMouseOut={this.onHover(IconArrowDown)}
      >
        <Nav onClick={this.toogleClick}>
          <NavText>{data.title}</NavText>
          <ArrowDown src={icon} expand={show} />
        </Nav>

        <NavContent expand={show} index={data.menu.length + 1}>
          {data.menu.map(item => (
            <NavChildren
              active={active === item.url}
              key={item.id}
              onClick={this.navClick(item)}
            >
              <NavSubText>{item.title}</NavSubText>
            </NavChildren>
          ))}
        </NavContent>
      </NavCollapse>
    );
  }
}

SidebarCollapse.defaultProps = {
  active: "",
  data: {},
  onClick: () => {}
};

SidebarCollapse.propTypes = {
  active: propTypes.string,
  data: propTypes.objectOf(propTypes.any),
  onClick: propTypes.func
};

export default SidebarCollapse;
