import React from "react";
import styled from "styled-components";
import home from "../../public/images/home.svg";
import ImageExtended from "../../components/ImageExtended";
import { Link, useLocation } from "react-router-dom";

const NavigationContainer = styled.nav(({ mapView }) => ({
  position: mapView ? "fixed" : "sticky",
  top: mapView ? "25px" : "25px",
  left: mapView ? "25px" : "0px",
  height: "max-content",
  marginLeft: mapView ? "0px" : "25px",
  marginTop: mapView ? "0px" : "25px",
  display: "flex",
  flexDirection: "column",
  zIndex: "10002",
}));

const NavigationItemBtn = styled.button(
  ({ theme, $selected, variant, $selectionColor }) => ({
    "--selection-color": "black",
    ...($selectionColor === "grey" && {
      "--selection-color": theme.colors.fullSiteGrey,
    }),
    ...($selectionColor === "orange" && {
      "--selection-color": theme.colors.part1IntroSectionOpener,
    }),
    ...($selectionColor === "blue" && {
      "--selection-color": theme.colors.part1CEQRSectionOpener,
    }),
    ...($selectionColor === "purple" && {
      "--selection-color": theme.colors.part1CEQR2SectionOpener,
    }),
    ...($selectionColor === "red" && {
      "--selection-color": theme.colors.part1CEQR3SectionOpener,
    }),
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 10px 0",
    padding: "0",
    // color: "var(--selection-color)",
    color: "#a3a199",
    // backgroundColor: theme.colors.fullSiteBackground,
    backgroundColor: "transparent",
    height: "65px",
    width: "65px",
    borderRadius: "50%",
    // border: `2px solid var(--selection-color)`,
    border: `1px solid #908E8E`,
    fontWeight: 700,
    cursor: "pointer",
    // fontSize: theme.fontSizes[5],
    fontSize: "36px",
    textAlign: "center",
    textDecoration: "none",
    ...(variant === "text" && {
    // fontSize: theme.fontSizes[5],
    fontSize: "36px",
    }),
    ...(variant === "roman" && {
      // fontSize: theme.fontSizes[5],
    fontSize: "36px",
    }),
    ...($selected && {
      color: theme.colors.fullSiteBackground,
      backgroundColor: "var(--selection-color)",
      border: `none`,
    }),
    // "&:hover": {
    //   color: theme.colors.fullSiteBackground,
    //   backgroundColor: "var(--selection-color)",
    // },
    "&:hover": {
      border: "none",
      backgroundColor: "var(--selection-color)",
      color: theme.colors.fullSiteBackground,
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
      // color: "var(--selection-color)",
    },
  })
);

const NavigationItemLink = styled(Link)(
  ({ theme, $selected, variant, $selectionColor }) => ({
    "--selection-color": "black",
    ...($selectionColor === "grey" && {
      "--selection-color": theme.colors.fullSiteGrey,
    }),
    ...($selectionColor === "green" && {
      "--selection-color": theme.colors.part2Header,
    }),
    ...($selectionColor === "orange" && {
      "--selection-color": theme.colors.part1IntroSectionOpener,
    }),
    ...($selectionColor === "blue" && {
      "--selection-color": theme.colors.part1CEQRSectionOpener,
    }),
    ...($selectionColor === "purple" && {
      "--selection-color": theme.colors.part1CEQR2SectionOpener,
    }),
    ...($selectionColor === "red" && {
      "--selection-color": theme.colors.part1CEQR3SectionOpener,
    }),
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 0 10px 0",
    padding: "0",
    color: "#a3a199",
    // backgroundColor: theme.colors.fullSiteBackground,
    backgroundColor: "transparent",
    height: "65px",
    width: "65px",
    borderRadius: "50%",
    border: `1.5px solid #a3a199`,
    fontWeight: 700,
    cursor: "pointer",
    fontSize: theme.fontSizes[5],
    // fontSize: "36px",
    textDecoration: "none",
    textAlign: "center",
    ...(variant === "text" && {
      fontSize: theme.fontSizes[5],
    }),
    ...(variant === "roman" && {
      // fontSize: theme.fontSizes[5],
      fontSize: "36px",
    }),
    ...($selected && {
      color: theme.colors.fullSiteBackground,
      backgroundColor: "var(--selection-color)",
      border: "none",
    }),
    "&:hover": {
      color: theme.colors.fullSiteBackground,
      backgroundColor: "var(--selection-color)",
      border: "none",
    },
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  })
);

const Navigation = ({ navType, currentMap, mapOnClick }) => {
  const location = useLocation();
  if (navType === "section1") {
    return (
      <NavigationContainer mapView={navType === "section1"}>
        <NavigationItemLink
          className="home"
          to={"/"}
          variant="text"
          $selectionColor="grey"
          select={"false"}
        >
          <ImageExtended src={home} />
        </NavigationItemLink>
        <NavigationItemBtn
          className="home"
          onClick={() => {
            mapOnClick("ceqrIntro");
          }}
          variant="roman"
          $selectionColor="orange"
          $selected={currentMap === "ceqrIntro"}
        >
          CEQR INTRO
        </NavigationItemBtn>
        <NavigationItemBtn
          onClick={() => {
            mapOnClick("secOneloadSizeFar");
          }}
          variant="roman"
          $selectionColor="blue"
          $selected={currentMap === "secOneloadSizeFar"}
        >
          1
        </NavigationItemBtn>
        <NavigationItemBtn
          onClick={() => {
            mapOnClick("secTwoSocialNeigh");
          }}
          variant="roman"
          $selectionColor="purple"
          $selected={currentMap === "secTwoSocialNeigh"}
        >
          2a
        </NavigationItemBtn>
        <NavigationItemBtn
          onClick={() => {
            mapOnClick("secThreeDevLimits");
          }}
          variant="roman"
          $selectionColor="red"
          $selected={currentMap === "secThreeDevLimits"}
        >
          2b
        </NavigationItemBtn>
      </NavigationContainer>
    );
  }
  if (navType === "methods") {
    return (
      <NavigationContainer mapView={navType === "section1"}>
        <NavigationItemLink
          className="home"
          to={"/"}
          variant="text"
          $selectionColor="green"
          select={"false"}
        >
          <ImageExtended src={home} />
        </NavigationItemLink>
        <NavigationItemLink
          className="navnum"
          $selectionColor="green"
          to={"/methods"}
          $selected={location.pathname === "/methods"}
          variant="text"
        >
          1
        </NavigationItemLink>
        <NavigationItemLink
        className="navnum"
          $selectionColor="green"
          to={"/methods/glossary"}
          $selected={location.pathname === "/methods/glossary"}
          variant="text"
        >
          2
        </NavigationItemLink>
        <NavigationItemLink
        className="navnum"
          $selectionColor="green"
          to={"/methods/about"}
          $selected={location.pathname === "/methods/about"}
          variant="text"
        >
          3
        </NavigationItemLink>
      </NavigationContainer>
    );
  }
  if (navType === "section2") {
    return (
      <NavigationContainer mapView={navType === "section1"}>
        <NavigationItemLink
          className="home"
          $selectionColor="grey"
          to={"/"}
          $selected={location.pathname === "/part1"}
          variant="text"
        >
          <ImageExtended src={home} />
        </NavigationItemLink>
        <NavigationItemLink
          $selectionColor="grey"
          to={"/part2"}
          $selected={location.pathname === "/part2"}
          variant="roman"
        >
          1
        </NavigationItemLink>
        <NavigationItemLink
          $selectionColor="grey"
          to={"/part2/section2"}
          $selected={location.pathname === "/part2/section2"}
          variant="roman"
        >
          2
        </NavigationItemLink>
        <NavigationItemLink
          $selectionColor="grey"
          to={"/part2/section3"}
          $selected={location.pathname === "/part2/section3"}
          variant="roman"
        >
          3
        </NavigationItemLink>
        <NavigationItemLink
          $selectionColor="grey"
          to={"/part2/section4"}
          $selected={location.pathname === "/part2/section4"}
          variant="roman"
        >
          4
        </NavigationItemLink>
        {/* <NavigationItemLink
          $selectionColor="grey"
          to={"/part2/section5"}
          $selected={location.pathname === "/part2/section5"}
          variant="roman"
        >
          5
        </NavigationItemLink> */}
        {/* <NavigationItemLink
          className="home"
          $selectionColor="grey"
          to={"/"}
          $selected={location.pathname === "/part1"}
          variant="text"
        >
          HOME
        </NavigationItemLink> */}
      </NavigationContainer>
    );
  }
};

export default Navigation;
