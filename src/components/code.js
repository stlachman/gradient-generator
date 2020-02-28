import React from "react";
import styled from "styled-components";

const Pre = styled.pre`
  overflow: auto;
  margin: 0;
  padding: 2em 0;
  word-spacing: normal;
  word-wrap: normal;
  word-break: normal;
`;

const Code = styled.code`
  font-weight: 500;
  background-color: #eee;
  padding: 2em 1em;
`;

export default function({ color, rotation, codeRef, gradientType }) {
  let gradientStyle =
    gradientType === "linear"
      ? `rgba(0, 0, 0, 0) linear-gradient(to ${rotation}, rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}), rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}), rgb(${color[2][0]}, ${color[2][1]}, ${color[2][2]})) repeat scroll 0% 0%`
      : `radial-gradient(circle, rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}), rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}), rgb(${color[2][0]}, ${color[2][1]}, ${color[2][2]})) repeat scroll 0% 0%`;
  return (
    <Pre>
      <Code ref={codeRef}>background: {gradientStyle}</Code>
    </Pre>
  );
}
