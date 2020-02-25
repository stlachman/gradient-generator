import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #eee;
  cursor: pointer;
`;

export default ({ handleClick, text }) => {
  return <Button onClick={handleClick}>{text}</Button>;
};
