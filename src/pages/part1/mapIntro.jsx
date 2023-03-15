import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Box from "../../components/Box";
import Header from "../../components/Header";

import styled from "styled-components";
import css from "@styled-system/css";
import NavPill from "../../components/NavPill";
import { Link } from "react-router-dom";

const NextLink = styled(Link)(css({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  textDecoration: "none",
  color:"#908E8E",
  "&:hover": {
    color: "#6BB219",
  },
}))

const SectionOne = () => {
  return (
    <>
      <Header
        sectionId="PART ONE"
        pillTitle={`Interactive Map`}
        title="Interactive Map + Case Studies"
        instructions="The following section includes a series of interactive maps examining development at a citywide 
        level from 2012-2022. The SITE x SITE web tool is intended to provide greater insight into 
        site-specific conditions that affect development under rezonings. The findings highlight limitations 
        in the CEQR methodology for identifying soft sites."
        bgImage="map"
        logoStyle={"outline"}
      />
    </>
  );
};

export default SectionOne;
