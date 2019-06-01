import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Accordion = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <Container>
      <div>{children}</div>
    </Container>
  );
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired
};

export default Accordion;
