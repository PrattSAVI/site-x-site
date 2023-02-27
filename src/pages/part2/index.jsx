import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Box from "../../components/Box";
import Header from "../../components/Header";
import triangle from "../../public/images/part2/engagement_triangles_updated.png";
import ImageExtended from "../../components/ImageExtended";
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
        isDev101pageHeader
        sectionId="PART TWO"
        pillTitle={`1. PRIMER`}
        title="Development 101 Introduction"
        subTitle="+ Livable Neighborhoods Program"
        subTitle2="+ Meeting in the Middle"
        bgImage="sec1"
        logoStyle={"outline"}
      />
      <Main navType="section2">
        <Flex as="section" className="flex-column" >
          <Text
            as="h3"
            variant="sectionHeadTitle"
            color="part2Header"
          >
           LIVABLE NEIGHBORHOODS PROGRAM: DEVELOPMENT 101
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          <Text as="span" variant="devSubHead" display="inline">
          The Livable Neighborhoods Program (LNP)
          </Text>{" "} 
          helps communities develop the knowledge and tools that they need to 
          participate effectively in public land use review processes and engage 
          in creative, community-based design and planning. This section outlines 
          key concepts that are helpful to put SITE x SITE into the broader 
          context of what shapes development in New York City–from the underlying 
          regulations, land use and environmental considerations, and stakeholder 
          perspectives in the decision making process. 
          </Text>
        </Flex>
          <Flex as="section" className="flex-column" >
          <Text
            as="h3"
            variant="sectionHeadTitle"
            color="part2Header"
          >
           Meeting in the Middle
          </Text>
          <Flex  flexDirection="row" className="flex-par">
            <Flex flexDirection="column" >
              <ImageExtended src={triangle} />
              <Text  variant="captions" textAlign="right" className="caption">
                Source: Municipal Art Society
                </Text>
            </Flex>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo"  >
            <Text as="p" variant="devSubHead" display="inline">
              Environmental review is a highly technocratic process.
            </Text>{" "}
            The public and decision-makers alike would benefit from a broader 
            understanding of methods and assumptions used in projecting future 
            development in CEQR evaluations.  SITE x SITE presents a data-driven, 
            holistic review of development activity primarily from 2007-2017 by 
            replicating CEQR methodology for soft site identification and contrasting 
            it against the reality of how these sites were actually developed. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo"  >
          <Text as="span" variant="devSubHead" display="inline">
            As a disclosure process, there is ample room for improvement in CEQR.
            </Text>{" "}
            SITE x SITE provides neighborhood overviews (using PUMA geography) showing 
            how soft sites have been developed over time in specific geographies. This 
            information is a critical step in strengthening CEQR methodology and impact 
            evaluations  because it  anchors future development projections to fact-based 
            information about development trends in different parts of the city.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par  par-solo">
          <Text as="span" variant="devSubHead" display="inline">
            There is no crystal ball with which to project future development, but 
            we can determine better indicators.
            </Text>{" "}
            Projecting development into the future is an inexact process. Many unforeseen factors 
            such as economic downturns, real estate market shifts, and changing demographics can 
            influence how development happens overtime.  However, current CEQR soft site analysis 
            methodology lacks sufficient nuance to effectively consider factors such as historical, 
            geographic, and site-specific trends that can influence development following City 
            land use actions. In contrast, SITE x SITE uses these attributes to identify historic 
            development patterns that can better inform how development may happen in the future 
            and create a more reliable framework from which to evaluate a project’s impacts on traffic, 
            schools, open space, and neighborhood socioeconomic conditions. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par  par-solo"  >
          <Text as="span" variant="devSubHead" display="inline">
            New Yorkers deserve a more reliable framework for anticipating potential future development 
            and evaluating environmental impacts.
            </Text>{" "}
            SITE x SITE illuminates ways current CEQR methodology could be improved to facilitate more 
            reliable future development projections and impact evaluations by incorporating observations 
            from a comprehensive look-back at development citywide. This would strengthen the evaluation 
            of a project’s environmental impact and ensure future development projections are rooted in 
            baseline conditions reflecting real historic development trends.
          </Text>
        </Flex>
        <Box marginTop="105px" marginBottom="85px">
          <NextLink to="/part2/section2" >
          <NavPill round={false} fontSize="26px" fontColor="#908E8E" marginRight="20px" padding="0px 25px" className="bottomnav" width="100%" justifyContent="left" >
              2. Introduction to Development in New York City
            </NavPill>
          </NextLink>
        </Box>
      </Main>
    </>
  );
};

export default SectionOne;
