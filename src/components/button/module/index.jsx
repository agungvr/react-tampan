import React from "react";
import propTypes from "prop-types";
import styled, { css } from "styled-components";
import { colors, shadows } from "../../../data/constants";
import Spinner from "../../spinner/module";

const withInverse = css`
  color: ${({ color }) => color || colors.primary.base};
  border: 1px solid;
  border-color: ${({ color }) => color || colors.primary.base};
  background-color: ${colors.white};

  &:hover {
    background-color: transparent;
    box-shadow: ${({ color }) => color || colors.primary.base} 0px 0px 0px 1px
      inset;
  }

  &:active {
    color: ${colors.white};
    box-shadow: ${({ color }) => color || colors.primary.base} 0px 0px 0px 1px
      inset;
    background-color: ${({ color }) => color || colors.primary.base};
  }

  &:focus {
    box-shadow: ${({ color }) => color || colors.primary.base} 0px 0px 0px 1px
        inset,
      rgba(255, 71, 133, 0.4) 0px 1px 9px 2px;
    outline: 0;
  }
`;

const withDisable = css`
  cursor: default;
  opacity: 0.45 !important;
  background-image: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  pointer-events: none !important;
`;

const withSize = css`
  font-size: ${({ size }) => {
    switch (size) {
      case "tiny":
        return ".6rem";
      case "small":
        return ".7rem";
      case "medium":
        return ".8rem";
      case "large":
        return ".9rem";
      default:
        return ".8rem";
    }
  }};
`;

const ButtonContainer = styled.button`
  background-color: ${colors.primary.base};
  margin: ${({ margin }) => margin || "0 .5em .5em 0"};
  padding: ${({ padding, loading }) =>
    padding || loading ? ".4em 2.5em .4em" : ".78571429em 2.5em .78571429em"};
  color: ${({ color }) => color || "rgb(255, 255, 255)"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  border-radius: ${({ borderRadius }) => borderRadius || "3em"};
  cursor: pointer;
  display: inline-block;
  position: relative;
  text-align: center;
  transform: translate3d(0px, 0px, 0px);
  vertical-align: top;
  white-space: nowrap;
  user-select: none;
  opacity: 1;
  line-height: 1;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  overflow: hidden;
  text-decoration: none;
  transition: all 150ms ease-out 0s;

  &:hover {
    background-color: ${colors.primary.hover};
    transform: translate3d(0px, -2px, 0px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
  }

  &:active {
    background-color: ${colors.primary.base};
    transform: translate3d(0px, 0px, 0px);
    box-shadow: ${shadows.active};
  }

  &:focus {
    box-shadow: ${colors.primary.base} 0px 1px 5px 0px;
    outline: 0;
  }

  ${({ full }) =>
    full &&
    css`
      width: 100%;
    `}

  ${withSize}
  ${props => props.inverse && withInverse}
  ${props => props.disabled && withDisable}
`;

const Button = ({
  children,
  loading,
  full,
  size,
  inverse,
  disable,
  color,
  margin,
  padding,
  fontWeight,
  borderRadius
}) => {
  return (
    <ButtonContainer
      size={size}
      inverse={inverse}
      loading={loading}
      color={color}
      full={full}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      disabled={disable}
    >
      {loading ? <Spinner inverse={inverse} /> : children}
    </ButtonContainer>
  );
};

Button.defaultProps = {
  full: undefined,
  color: undefined,
  size: undefined,
  margin: undefined,
  padding: undefined,
  borderRadius: undefined,
  fontWeight: undefined,
  disable: undefined,
  loading: false,
  inverse: false
};

Button.propTypes = {
  children: propTypes.node.isRequired,
  full: propTypes.string,
  color: propTypes.string,
  inverse: propTypes.bool,
  margin: propTypes.string,
  padding: propTypes.string,
  fontWeight: propTypes.string,
  borderRadius: propTypes.string,
  disable: propTypes.string,
  loading: propTypes.bool,
  size: propTypes.oneOf(["tiny", "small", "medium", "large"])
};

export default Button;
