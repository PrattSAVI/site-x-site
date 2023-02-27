import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./utils/theme";
import { HashRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/globals.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "urw-din", sans-serif;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    max-width: 1920px;
    color: ${theme.colors.fullSiteText};
    background-color:${theme.colors.fullSiteBackgroundColor} ;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <HashRouter>
        <ScrollToTop />
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>
);
