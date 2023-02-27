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
        title="Interactive Map + Case Studies + Findings"
        subTitle="CEQR Introduction"
        subTitle2="1. Size and FAR"
        subTitle3="2. Social + Neighborhood Factors"
        subTitle4="3. Regulatory & Zoning"
        bgImage="map"
        logoStyle={"outline"}
      />
      <Main navType="">
        <Flex as="section" className="flex-column" >
          <Text
            as="h3"
            variant="sectionHeadTitle"
            color="part2Header"
            marginTop="105px"
            marginBottom="21px"
          >
           Interactive Map + Case Studies + Findings
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par"  mb="60px">
          The following section includes a series of interactive maps examining development at a citywide 
          level from 2012-2022. The SITE x SITE web tool is intended to provide greater insight into 
          site-specific conditions that affect development under rezonings. The findings highlight limitations 
          in the CEQR methodology for identifying soft sites.
          </Text>
        </Flex>
        <Box marginTop="70px" marginBottom="85px">
          <NextLink to="/part1" >
          <NavPill round={false} fontSize="26px" fontColor="#908E8E" marginRight="20px" padding="0px 25px" className="bottomnav" width="100%" justifyContent="left" >
              View the Interactive Map
            </NavPill>
          </NextLink>
        </Box>
      </Main>
    </>
  );
};

export default SectionOne;
