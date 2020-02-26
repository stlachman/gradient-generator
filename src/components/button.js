import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #e1e1e1;
  padding: 1em 1.5em;
  font-size: 0.8rem;
  cursor: pointer;
  border: 0.25rem #e1e1e1 solid;
  margin: 0 1em;
`;

export default ({ handleClick, text }) => {
  return <Button onClick={handleClick}>{text}</Button>;
};
