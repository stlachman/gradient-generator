import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Helmet from "react-helmet";
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
      <Helmet
        title="Cool Wave"
        meta={[
          {
            name: "Cool Wave",
            content: "Generate cool gradients"
          },
          { name: "keywords", content: "gradients, ui, design, code" }
        ]}
      >
        <link
          href="https://fonts.googleapis.com/css?family=Spartan:400,500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header />
      <GlobalStyle />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
