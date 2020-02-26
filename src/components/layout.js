import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Footer from "./footer";

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
const Main = styled.main`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;
export default function({ children }) {
  return (
    <>
      <Header />
      <GlobalStyle />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
