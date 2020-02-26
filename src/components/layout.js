import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Spartan&display=swap');
  html {
    box-sizing: border-box;
    font-size: 125%;
    
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Spartan", sans-serif
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
