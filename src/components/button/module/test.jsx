import React from "react";
import styled from "styled-components";
import { colors, shadows } from "../../../data/constants";

const ButtonContainer = styled.button`
  background-color: ${colors.primary};
  width: ${({ width }) => width || "140px"};
  height: ${({ height }) => height || null};
  margin: ${({ margin }) => margin || "5px"};
  padding: ${({ padding }) => padding || "10px 20px"};
  color: ${({ color }) => color || "rgb(255, 255, 255)"};
  font-weight: ${({ fontWeight }) => fontWeight || "700"};
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
    background-color: rgb(255, 45, 116);
    transform: translate3d(0px, -2px, 0px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 6px 0px;
    outline: null;
  }

  &:active {
    background-color: ${colors.primary};
    transform: translate3d(0px, 0px, 0px);
    box-shadow: ${shadows.active};
    outline: null;
  }

  &:focus {
    background-color: null;
    transform: null;
    box-shadow: rgba(255, 71, 133, 0.4) 0px 1px 9px 2px;
    outline: 0;
  }

  &:focus:hover {
    background-color: null;
    transform: null;
    box-shadow: rgba(255, 71, 133, 0.4) 0px 1px 10px 0px;
    outline: null;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex: ${({ flex }) => flex || 1};
  height: 100%;
  font-size: 14px;
`;

const OutlineButtonCountainer = styled(ButtonContainer)`
  color: ${({ color }) => color || colors.primary};
  border: 1px solid;
  border-color: ${({ color }) => color || colors.primary};
  background-color: ${colors.white};

  &:hover {
    background-color: transparent;
    box-shadow: ${({ color }) => color || colors.primary} 0px 0px 0px 1px inset;
  }

  &:active {
    color: ${colors.white};
    box-shadow: ${({ color }) => color || colors.primary} 0px 0px 0px 1px inset;
    background-color: ${({ color }) => color || colors.primary};
  }

  &:focus {
    box-shadow: ${({ color }) => color || colors.primary} 0px 0px 0px 1px inset,
      rgba(255, 71, 133, 0.4) 0px 1px 9px 2px;
    outline: 0;
  }

  &:focus:hover {
    box-shadow: r ${({ color }) => color || colors.primary} 0px 0px 0px 1px
        inset,
      ${({ color }) => color || colors.primary} 0px 8px 18px 0px;
  }
`;

const Button = () => {
  function buttonClick(e) {
    e.preventDefault();
    console.log("clicked");
  }
  return (
    <ButtonContainer onClick={buttonClick}>
      <InnerContainer>Button</InnerContainer>
    </ButtonContainer>
  );
};

export const OutlineButton = () => {
  function buttonClick(e) {
    e.preventDefault();
    console.log("clicked");
  }
  return (
    <OutlineButtonCountainer onClick={buttonClick}>
      <InnerContainer>Button</InnerContainer>
    </OutlineButtonCountainer>
  );
};

export default Button;
