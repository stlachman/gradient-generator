import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./header";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 125%;
    
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: "Spartan", sans-serif;
    background-color: #f0f0f0;
  }
`;
export default function({ children }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <main>{children}</main>
    </>
  );
}
