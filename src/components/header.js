import React from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";

const Header = styled.header`
  padding: 1em 1.5em;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 0;
`;

const Link = styled.a`
  color: #2d3748;
  text-decoration: none;
`;

export default () => {
  return (
    <Header>
      <Title>Cool Wave</Title>
      <Link href="https://github.com/stlachman" target="_blank">
        <IoLogoGithub />
      </Link>
    </Header>
  );
};
