import React from "react";
import styled from "styled-components";

const Header = styled.header`
  padding: 1em 1.5em;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

export default () => {
  return (
    <Header>
      <Title>Gradient Generator</Title>
    </Header>
  );
};
