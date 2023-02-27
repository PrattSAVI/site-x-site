import React from "react";
import Text from "../components/Text";
import Flex from "../components/Flex";
import Main from "../components/Main";
import Header from "../components/Header";
import NavPill from "../components/NavPill";
import { Link } from "react-router-dom";
import styled from "styled-components";
import css from "@styled-system/css";
import ImageExtended from "../components/ImageExtended";
import masNYCLogo from "../public/images/logo_mas.png";
import rpaLogo from "../public/images/logo_rpa.png";
import nyctLogo from "../public/images/logo_nyct.png";
import livableLogo from "../public/images/logo_lnp.png";
import saviLogo from "../public/images/logo_savi_wide.svg";



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

const Home = () => {
  return (
    <>
      <Header isHomepageHeader bgImage="home" />
      <Main>
      <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            mb="10px"
            className="landing-mobile"
          >
            Welcome to SITE x SITE
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par par-solo disclaimer" mb="20px" >
          This website is optimized for desktop. To view maps, please visit site on computer or tablet.
          </Text>
          <NextLink to="/part1/mapIntro" >
          <NavPill round={false} fontColor="#908E8E" padding="0px 25px" className="bottomnav homenav mapnav" justifyContent="left" >
          INTERACTIVE MAP + CASE STUDIES + FINDINGS
            </NavPill>
          </NextLink>
          <NextLink to="/part2" >
          <NavPill round={false} fontColor="#908E8E" padding="0px 25px" className="bottomnav homenav" justifyContent="left" >
          PRIMER ON DEVELOPMENT IN NEW YORK CITY
            </NavPill>
          </NextLink>
          <NextLink to="/methods" >
          <NavPill round={false} fontColor="#908E8E" padding="0px 25px" className="bottomnav homenav" justifyContent="left" >
          METHODOLOGY + SOURCES + GLOSSARY
            </NavPill>
          </NextLink>
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            marginTop="105px"
            className="landing-mobile"
          >
            What is SITE x SITE?
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par par-solo">
          {/* <Text as="span" variant="devSubHead" display="inline"> SITE x SITE (“Site by Site”)  </Text>{" "} */}
            SITE x SITE (“Site by Site”) is an unprecedented retrospective study of citywide development that illustrates the 
            limitations of City Environmental Quality Review 
            (<Link to= "/methods/glossary" className="glossary-link" target="_blank" rel="noopener noreferrer" title="go to glossary">CEQR</Link>) 
            in effectively capturing the potential extent of development 
            and environmental effects land use decisions such as rezonings have on city neighborhoods. CEQR requires the City 
            to assess the impacts of discretionary actions so that decision-makers can weigh the costs and benefits before 
            funding or approving.    
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par par-solo">
          Specifically, SITE x SITE looks back on the historic 
          (<Link to= "/methods/glossary" className="glossary-link" target="_blank" rel="noopener noreferrer" title="go to glossary">development</Link>) 
           of 
          (<Link to= "/methods/glossary" className="glossary-link" target="_blank" rel="noopener noreferrer" title="go to glossary">“soft sites”</Link>)
          , sites defined under CEQR that are 
          likely to be developed in the future, but where a specific development is not presently proposed or planned. Reliable 
          soft site identification is a critical step in establishing the analytical framework in CEQR evaluations, known 
          as the Reasonable Worst Case Development Scenario. 
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par par-solo">
          The goal of SITE x SITE is to provide more reliable information about past development so that estimates of future 
          development and potential impacts are rooted in actual trends. Ultimately, SITE x SITE seeks to improve CEQR so 
          that city planners and decision makers can better serve communities and communities themselves can be better 
          informed in the City’s public land use and environmental review processes.
          </Text>
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            marginTop="105px"
            className="landing-mobile"
          >
            SITE x SITE Collaboration
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par par-solo" >
          SITE x SITE is a collaborative effort of the CEQR Reform Coalition, consisting of the Municipal Art Society of New 
          York (MAS), Regional Plan Association (RPA), and the New York University Guarini Center on Environmental, Energy 
          and Land Use Law (NYU Guarini Center). It was made possible through a grant from the New York Community Trust (NYCT). 
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par par-solo" >
          The Pratt Institute Spatial Analysis and Visualization Initiative (SAVI) played an instrumental role in aggregating and 
          analyzing data, as well as designing and developing this web tool. 
          </Text>
          <Flex className="flex-par" width="100%" flexDirection="row" alignItems="center" alignContent="space-between" mb="85px">
            <ImageExtended src={masNYCLogo} />
            <ImageExtended src={livableLogo} ml="20px" />
            <ImageExtended src={rpaLogo} ml="20px" alignSelf="center" />
            <ImageExtended src={nyctLogo} ml="20px" alignSelf="center" />
            <ImageExtended src={saviLogo} ml="20px" className="savi-logo" />
          </Flex>
        </Flex>
      </Main>
    </>
  );
};

export default Home;
