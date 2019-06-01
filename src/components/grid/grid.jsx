import styled from "styled-components";

function getWidthString(span) {
  if (!span) return;

  const width = (span / 12) * 100;
  // eslint-disable-next-line consistent-return
  return `width: ${width}%;`;
}

const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

const Column = styled.div`
  float: left;
  ${({ xs }) => (xs ? getWidthString(xs) : "width: 100%")};

  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)}
  }

  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)}
  }

  @media only screen and (min-width: 1200px) {
    ${({ lg }) => lg && getWidthString(lg)}
  }
`;

export { Column, Row };
