import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Box from "../../components/Box";
import Header from "../../components/Header";

import bushwick from "../../public/images/part2/section3/bushwick_map.jpeg";
import plan from "../../public/images/part2/section3/bushwick_plan-min.png";
import dev923 from "../../public/images/part2/section3/before_after_923.jpg";
import dev1510 from "../../public/images/part2/section3/before_after_1510-min.png";
import dcp from "../../public/images/part2/section3/dcp_cover-min.png";
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

const SectionThree = () => {
  return (
    <>
      <Header
        isDev101pageHeader
        sectionId="PART TWO"
        pillTitle={`3. PRIMER`}
        title="Stakeholder Perspectives on Neighborhood Development"
        subTitle="&#x2022; In their own words"
        bgImage="sec3"
        logoStyle={"outline"}
      />
      <Main navType="section2">
      <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
          >
            In Their Own Words: Perspectives on Understanding Development in Bushwick
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          Bushwick, Brooklyn provides a glimpse into the diversity of conversations around development from 
          neighborhood, developer, and City perspectives. Efforts to initiate, prepare for, and respond to 
          development highlight different opportunities and concerns. 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={bushwick} />
            <Text  variant="captions"  className="caption">
              Source: City of New York, Department of City Planning
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          Bushwick is growing. The neighborhood is continuing to change as new projects are being built under 
          existing zoning and through private land use applications that allow for more density than was 
          previously allowed. Below, we consider some of the components that lead different stakeholders to 
          seek a change to the underlying zoning and shape development in the area. 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={plan} />
            <Text  variant="captions" className="caption">
            Source: Hester Street
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo">
          <Text as="span" variant="devSubHead"> 
            Neighborhood perspective: Learning from the Bushwick Community Plan
          </Text>
          The <a href="https://parks.ny.gov/shpo/national-register/" target="_blank"  rel="noopener noreferrer" className="link"> Bushwick Community Plan</a> was  
          initiated in 2014 by Community Board 4 and Council Members Antonio 
          Reynoso and Rafael Espinal, who invited residents to assist in the planning. This collaborative neighborhood 
          plan sought to recognize how Bushwick was changing and then responded with a community planning process 
          using zoning, preservation, and other tools to welcome new neighbors while assisting current residents. 
          The plan’s proposed rezoning was aimed at protecting existing affordable housing, preserving the neighborhood’s 
          character, preventing displacement, and specifically targeting where growth and development happens.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo"  ml="40px" mr="80px" textAlign="justify">
          <i>
              “The community is in the same room with the agencies working out a
              plan. We have subcommittees, we have seventy members on our
              steering committee, there’s organizations, there’s residents,
              there’s business owners, there’s developers, then we have an
              executive committee of seven members that help bring information
              to the steering committee. We’ve had community meetings on
              economic development, transportation, housing…It’s a community
              plan in which we get a community-based process from the bottom-up,
              but we involve the city from the beginning, to help us with the
              technical stuff, and make sure that what we present to them is
              feasible.”
            </i>
            <br />
            <br />
            -Council Member Antonio Reynoso, 2017
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={dev923} />
            <Text  variant="captions" className="caption">
            Example of As-of-Right Development at 923 Bushwick Avenue. 
            Source: Google Maps & L&C Associates
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
           <Text as="span" variant="devSubHead" >
            Development perspective: Learning from recent development projects in Bushwick
            </Text>
          Recent development in the area reflects the reality that many people want to live in Bushwick. 
          The increase in demand for limited units has attracted new residents who are willing and able 
          to pay higher rents than Bushwick has previously seen. Recent trends have shown that the market 
          demand is here, and more-and-more market rate housing projects will continue to sprout up. In 
          the absence of a neighborhood-wide zoning change, as-of-right structures are being built within 
          existing zoning rules, but with such an active market, some properties are seeking changes to 
          their underlying zoning to allow for more intense use, increased density, and more flexibility 
          of use. Without Mandatory Inclusionary Housing,a zoning tool which requires developers to include 
          affordable housing in areas that are rezoned to allow for more housing development, new developments 
          that build under existing rules do not contribute the affordable housing that would be required to 
          be built with a change in the zoning. Without the increase in zoned capacity, fewer market rate 
          units can be built. 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={dev1510} />
            <Text  variant="captions" className="caption">
            Example of development facilitated by a private land use application at 1510 Broadway Avenue. 
            Source: Google Maps & City of New York, Department of City Planning, Gluck+
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          Bushwick continues to be an attractive market for development activity. To meet the needs of everyone 
          who lives here and everyone who wants to live here, more housing (especially affordable housing) is needed. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span"variant="devSubHead" >
              In Developer’s Own Words:
            </Text>
          “I am proud to be developing a property that sat vacant for years to bring much needed housing to a growing part  of Brooklyn,” 
          said <a href="https://www.nyc.gov/site/hpd/news/052-22/vacant-lot-development-cutting-edge-affordable-housing-destination-the-heart-of " target="_blank"  rel="noopener noreferrer" className="link">Rella Fogliano</a> 
          , president and CEO of MacQuesten Development. “Along with the City of New York and our other partners in 
          government and the private sector, we are helping to continue the revitalization of Brooklyn.” 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={dcp} />
            <Text  variant="captions" className="caption">
            Source: City of New York, Department of City Planning
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" > 
          <Text as="span"variant="devSubHead" >
          City Perspective: Learning from the Bushwick Neighborhood Plan
        </Text>
        Bushwick is actively growing. MAS and RPA’s “Up to the TASC” report suggests that that there is more demand for new 
        construction in the area as reflected by a higher number of permit activity. A neighborhood rezoning presents a mechanism 
        to maximize the production of both new affordable and market rate units. The City’s 
        <a href="https://www.nyc.gov/site/planning/plans/bushwick-neighborhood-plan/bushwick-neighborhood-plan.page" target="_blank"  rel="noopener noreferrer" className="link"> Bushwick Neighborhood Plan </a> 
        attempted to build off the community-led Bushwick Community Plan, while producing more affordable housing as required through 
        Mandatory Inclusionary Housing by allowing for higher density, mixed use buildings. From a service planning perspective, 
        locating more future residents close to transit may provide for more access to jobs, services, and amenities. 
        As a collective action, a City-sponsored rezoning can more holistically plan for the character of an area. 
        A neighborhood-wide strategy also provides a streamlined process that can deliver new capacity for housing more 
        efficiently than individual private applications. 
        </Text>
        <Flex flexDirection="column" className="flex-par">
          <Text as="span"variant="devSubHead" >
            In the City’s Own Words:
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo"  ml="40px" mr="80px" textAlign="justify">
          <i>
          “While the existing zoning in much of Bushwick allows new housing construction, it does not include requirements 
          for affordable housing or distinguish between areas where more substantial development would be appropriate or 
          inappropriate, such as along blocks with small rowhouses. As a result, Bushwick has seen the construction of 
          much new housing in recent years and, while this helps ease the housing crunch, much of this construction has 
          been market-rate and only limited affordable housing, primarily either on a few remaining City-owned sites, 
          those controlled by mission-driven developers, or in areas rezoned with incentives for the inclusion of 
          low-income housing. To accommodate increasing demand for housing in Bushwick, the Department of City Planning 
          in coordination with other City agencies, has been working with community residents and stakeholders to identify 
          areas for both growth with new affordable housing and preservation of existing built character.”
            </i>
            <br />
            <br />
            -Department of City Planning
          </Text>
        </Flex>
    </Flex>


        <Box marginTop="105px" marginBottom="85px">
          <NextLink to="/part2/section4" >
            <NavPill round={false} fontSize="26px" fontColor="#908E8E" marginRight="20px" padding="0px 25px" className="bottomnav" width="100%" justifyContent="left" >
            4. Introduction to NYC Environmental and Land Use Review Process
            </NavPill>
          </NextLink>
        </Box>
      </Main>
    </>
  );
};

export default SectionThree;
