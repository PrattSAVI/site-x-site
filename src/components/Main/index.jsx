import React, { Children } from "react";
import styled from "styled-components";
import theme from "../../utils/theme";
import Navigation from "../Navigation";

const MainContainer = styled.main(() => ({
  display: "grid",
  backgroundColor: theme.colors.cream,
  gridTemplateColumns: " repeat(6, minmax(100px, 300px))",
}));

const ContentContainer = styled.div(() => ({
  gridColumn: "2 / 6",
  gridRow: "1 / 1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const Main = ({ navType, children }) => {
  return (
    <MainContainer>
      <Navigation navType={navType}/>
      <ContentContainer className="main-container" >
        {Children.map(children, (child) => {
          return child;
        })}
      </ContentContainer>
    </MainContainer>
  );
};

export default Main;
