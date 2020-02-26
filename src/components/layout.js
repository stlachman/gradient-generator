import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
  }
`;
export default function({ children }) {
  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
}
