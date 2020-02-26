import React from "react";
import styled from "styled-components";
import { IoLogoGithub } from "react-icons/io";

const Footer = styled.footer`
  padding: 1em 1.5em;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 1rem;
  margin: 0;
`;

const Link = styled.a`
  color: #2d3748;
  text-decoration: none;
`;

export default () => {
  return (
    <Footer>
      <Title>Cool Wave</Title>
      <Link href="https://github.com/stlachman" target="_blank">
        <IoLogoGithub />
      </Link>
    </Footer>
  );
};
