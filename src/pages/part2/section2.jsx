import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Box from "../../components/Box";
import Header from "../../components/Header";
import airRights from "../../public/images/part2/TDR_min.svg";
import airRights2 from "../../public/images/part2/air_rights_3rd_ave.jpg";
import buildingAlterations from "../../public/images/part2/Farley_alteration_2019.jpg";
import demolitions from "../../public/images/part2/SunnysideYards.jpg";
import seminary from "../../public/images/part2/Union_Theological_Seminary.jpg";
import zoning from "../../public/images/part2/zoningHandbook.jpg";
import fard from "../../public/images/part2/FAR_diagram.svg";
import farg from "../../public/images/part2/FAR_graphic.svg";
import zoningd from "../../public/images/part2/zoning_diagram-min.svg";
import timeline from "../../public/images/part2/section2/timeline2.svg";
import newConstruction from "../../public/images/part2/newConstruction_min.jpg";
import zoningLotMerger from "../../public/images/part2/lot_merger.svg";
// import FooterNavPill from "../../components/NavPill/FooterNavPill";
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


const SectionTwo = () => {
  return (
    <>
      <Header 
        isDev101pageHeader
        sectionId="PART TWO"
        pillTitle={`2. PRIMER`}
        title="Introduction to Development in New York City"
        subTitle="&#x2022; What is development activity?"
        subTitle2="&#x2022; How does development happen in New York City?"
        subTitle3="&#x2022; What led us here?"
        subTitle4="&#x2022; What can be built?"
        bgImage="sec2"
        logoStyle={"outline"}
      />
      <Main navType="section2">
      <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            mb="0px"
          >
            What is development activity?
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          Development activity can refer to new construction, demolition, or consolidation of a building, 
          structure, or lot, any change in use of a building or structure, or any changes in the use of land. 
          These changes may create additional impacts that, in some instances, require discretionary review 
          before proceeding.  
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          This web tool considers the following indicators of development
          activity in relation to soft site identification:
          </Text>
          <Flex  flexDirection="row" className="flex-par">
            <Flex flexDirection="column"  width="60%" className="dev-img" paddingRight="20px" >
              <ImageExtended src={newConstruction} />
              <Text  variant="captions" className="caption">
                Source: Municipal Art Society
                </Text>
            </Flex>
            <Text as="p"   variant="devParagraph" className="dev-par dev-text" width="calc(40% - 20px)"  >
              <Text as="span" variant="devSubHead"> New Construction </Text>
              represents new construction activity, large-scale building expansions, development of a vacant 
              site or a site that included a demolished building, or infill construction. 
            </Text>
          </Flex>
          <Flex flexDirection="row" className="flex-par" >
            <Flex flexDirection="column"  width="60%" className="dev-img" paddingRight="20px" >
              <ImageExtended src={zoningLotMerger} />
              <Text  variant="captions" className="caption" >
                Source: Municipal Art Society
                </Text>
            </Flex>
            <Text as="p"   variant="devParagraph" className="dev-par dev-text" width="calc(40% - 20px)" >
              <Text as="span" variant="devSubHead" display="inline"> Zoning lot mergers (ZLM) </Text>{" "}
              combine adjacent lots into a shared zoning lot, and pool together their development rights. 
              For example, two owners with lots that are each 50’ x 100’ may join into a single 100’ x 100’ 
              lot. The resulting lot would allow for the same amount of density as before.   
            </Text>
          </Flex>
          <Flex >
          <Text as="p"   variant="devParagraph" className="dev-par par-solo" >
          ZLMs move air rights between contiguous (adjacent, not across the street) tax 
          lots within a single block. In these transfers the density within a block does 
          not increase, it just moves from one lot to another. ZLMs are executed as-of-right, 
          which means no public review process is required. 
          </Text>
          </Flex>
          <Text as="p"   variant="devParagraph" className="dev-par par-solo" >
            Although not directly considered development for the purposes of
            this project, due to ambiguities in the source data, the following
            are also generally viewed to be signs of development activity:
          </Text>
          
          <Flex flexDirection="row" className="flex-par" >
            <Flex flexDirection="column"  width="60%" className="dev-img" paddingRight="20px" >
              <ImageExtended src={buildingAlterations} />
              <Text variant="captions" className="caption" >
              Alteration at Farley Post Office at the Moynihan Train Hall. Source: Creative Commons, Antigng
              </Text>
            </Flex>
            <Text as="p"   variant="devParagraph" className="dev-par dev-text"  width="calc(40% - 20px)" >
              <Text as="span" variant="devSubHead" display="inline"> Building alterations </Text> 
              can apply to both existing buildings (increase or decrease in intensity of use, 
              conversion of space, adding floors, demolitions, etc.) and existing plans for buildings 
              (building mass, floor heights, egress, etc.). [Note: Site x Site focuses on Type 1 alterations, 
              which result in significant changes to a building or structure.] 
            </Text>
          </Flex>
          <Flex mb="30px" flexDirection="row" className="flex-par" >
            <Flex flexDirection="column"  width="60%" className="dev-img" paddingRight="20px" >
              <ImageExtended src={demolitions} />
              <Text variant="captions" className="caption">
              Demolition of the New York & Atlantic Railway building in Sunnyside Yards.
                 Source: Creative Commons, MTA Capital Construction Mega Projects
              </Text>
            </Flex>
            <Text as="p"   variant="devParagraph" className="dev-par dev-text"  width="calc(40% - 20px)" >
              <Text as="span" variant="devSubHead" display="inline"> Demolitions </Text> 
              represent any activity that results in the dismantling, razing,
            destroying, or wrecking of any building or structure or any part
            of it by pre-planned and controlled methods. Demolitions are a
            form of building alteration.
            </Text>
          </Flex>
          <Flex flexDirection="row" className="flex-par">
            <Flex flexDirection="column"  width="60%" className="dev-img" paddingRight="20px" >
              <ImageExtended src={airRights2} />
              <Text variant="captions" className="caption">
              An example of air rights transfer: the newly constructed high-rise building at Third 
              Avenue and 23rd Street extends over the four-story building at 318 Third Avenue at 
              24th Street. Source: Creative Commons, Beyond My Ken
              </Text>
            </Flex>
            <Flex flexDirection="column" width="calc(40% - 20px)" className="dev-text" >
              <Text as="p"   variant="devParagraph" className="dev-par" >
                <Text as="span" variant="devSubHead" display="inline"> Air Rights </Text> 
                also referred to as “excess development rights”, represents the floor area 
                that is allowed to be built under zoning regulations that have yet to be 
                transferred or used for construction. 
              </Text>
              <Flex flexDirection="column">
                <ImageExtended src={airRights} />
                <Text variant="captions" className="caption">
                Source: Municipal Art Society
                </Text>
              </Flex>  
            </Flex>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          <Text as="span" variant="devSubHead" >
            A Note of the Transfer of Development Rights
          </Text>
          The New York City Zoning Resolution allows buildings built below their full FAR to transfer their unused 
          FAR to another site. These additional development rights are known as transferable development rights, 
          (TDRs) or air rights. Once all air rights are sold, the seller loses the ability to further develop their 
          own property.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          Landmark transfers allow landmark owners to sell unused
          development rights to properties adjacent to the site, between sites
          that share an intersection, or directly across the street. They
          require a special permit from the City Planning Commission, which
          triggers a public review process (ULURP and CEQR).
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          Landmark transfers help compensate building owners for the costs of
          preserving historic structures. Like with ZLMs, floor area will only
          shift within the immediate area of the landmark – keeping the area’s
          allowable density constant. Except in “high-intensity” commercial
          districts, transfers are limited to add no more than 20 percent to
          the receiving site’s allowed maximum floor area. Landmark transfers
          are very rare: they have only been used 12 times to date. Landmarks
          in R1 - R5 Districts are ineligible, as are cemeteries, bridges, and
          monuments. Buildings in historic districts, including individual
          landmarks, are also ineligible.
          </Text>
            <Flex flexDirection="column" mb="30px" mt="30px">
              <ImageExtended src={seminary}/>
              <Text variant="captions" className="caption"textAlign="left">
              Transfer of Air Rights at Union Theological Seminary in Morningside Heights. 
               Source: Creative Commons, ajay_suresh
              </Text>
            </Flex>
        </Flex>
        <Flex as="section" className="flex-column" >
          <Text
            as="h3"
            variant="sectionHeadTitle"
            color="part2Header"
          >
            How does development happen in New York City?
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          In 1916, New York became the first city in the world to implement citywide zoning regulations. 
          This set of regulations, known as the Zoning Resolution, was last updated as a whole in 1961. 
          Since then, smaller site or neighborhood rezonings have brought about incremental changes to 
          the city’s built environment.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          <Text as="span" variant="devSubHead">
            &quot;As-of-right&quot; development
          </Text> 
          Since 2010, eighty percent of new housing development in NYC have been built &quot;as-of-right&quot;, 
          meaning it  conforms with existing zoning regulations (I.e., allowable floor area, use, and density). 
          This type of development does not require any further discretion­ary zoning approval from City Planning 
          Commission or Board of Standards and Appeals and does not require public review nor administrative 
          discretion to proceed. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          <Text as="span" variant="devSubHead">
          Facilitated by a land use action 
          </Text> 
          Approximately [insert estimation from analysis] percent of new housing development in NYC between 2007 
          and 2017 was facilitated by a particular zoning/land use action, not as-of-right. This development was 
          subject to CEQR review. As a discretionary action, these new developments required deviation from 
          existing zoning, having received additional development flexibility and/or capacity through a change 
          to the underlying zoning or modifications or amendments to the underlying land use rules. This can be 
          difficult to accurately quantify as the influence of a change may not result in development within a 
          specified period, often between 10-15 years after an action has been approved.  New development that 
          occurs within this window may be rightly characterized as facilitated by a land use action. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          Development activity that may occur beyond this period could also be rightly attributed, as the change may 
          have facilitated or encouraged land assembly, lot mergers, or other pre-development activity. This reinforces 
          the need to evaluate various aspects of activity retroactively. For example, 28 percent of all housing units 
          completed between 2010 and 2018 occurred as-of-right within neighborhoods rezoned post 2000.  
          </Text>
        </Flex>
        <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
          >
            What led us here? A Timeline of Significant Land Use Moments in NYC Since 2000
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          <Text as="span" variant="devSubHead">
          What led us here? 
          </Text> 
          The timeline below outlines key moments that put development in a broader political, population, and policy 
          context to understand more complicated market factors. Real estate happens in cycles, periods of investment, 
          housing demand, and policy collide to shape what gets built (and when). As New York City settles into the Adams 
          administration, it is helpful to look back at all that has happened since 2000. 
          </Text>
          <ImageExtended src={timeline} mt="30px"/>
        </Flex>
        <Flex as="section" className="flex-column" >
          <Text
            as="h3"
            variant="sectionHeadTitle"
            color="part2Header"
          >
            What can be built?
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par par-solo" >
          Zoning is a law that organizes how land may be used. It establishes an orderly pattern of development across neighborhoods 
          and the city by identifying what may be built on a piece of property. Zoning regulations set limits on how a property owner 
          may use land (rather than requiring them to use it in a particular way). 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={zoning} />
            <Text variant="captions" className="caption">
            Zoning Handbook, City of New York, Department of City Planning
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          The 1961 Zoning Resolution introduced the idea of “Floor Area Ratio” or “FAR” which regulates the size of a 
          building based on the size of the building lot. The shape and height of a building may change as long as its 
          density (aka bulk, mass, or volume) conforms with the allowed FAR. FAR regulations limit overall building 
          profiles while providing architects and developers with the flexibility to create diversity within the built 
          environment. The floor area of a building is the sum of the gross area of each floor of the building.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          FAR determines how much floor area you can have in your building relative to the size of your lot. It is 
          the way New York City calculates and understands density. This is not always equivalent to the number of 
          stories you can build, but rather a relationship between the size of the lot and how much building can be 
          built. The same amount of floor area can result in different building shapes depending on what portion of 
          a lot is used. In the example below, we see a 1-story building with a FAR of 1 can be a one story, two 
          story, or four story building based on this measure of density. 
          </Text>
          <Flex flexDirection="column" className="flex-par" >
            <ImageExtended src={fard}  />
            <ImageExtended src={farg} mt="40px"/>
            <Text variant="captions" className="caption"textAlign="left">
            Source: Municipal Art Society
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          <Text as="span" variant="devSubHead">
          Intensity of Use which helps us understand “How much” of a building
          </Text> 
          In New York City, there are three main zoning districts (Commercial-C, Residential-R and Manufacturing-M), 
          which outline components that will give shape to the building like the amount of floor area that is allowed, 
          the size of front, side, or rear yards, the amount of required parking, the size of commercial spaces, or in 
          some cases the height of the building. 
          </Text>
          <Flex flexDirection="column" className="flex-par">
            <ImageExtended src={zoningd} />
            <Text variant="captions" className="caption"textAlign="left">
            Source: Municipal Art Society
            </Text>
          </Flex>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
          <Text as="span" variant="devSubHead">
            Flexibility of Use which helps us understand “What kind of
            activities” take place in a building
          </Text>
            The Zoning Resolution doesn’t just regulate the size of a building.
            Local governments create zoning districts to regulate what types of
            uses and structures are permitted within a designated area. Common
            examples include:
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo"  marginLeft="60px">
            <Text as="span" variant="devSubHead" display="inline">
              Housing
            </Text>{" "}
            uses like apartment buildings, condos, row houses, and single family
            houses
            <br />
            <Text as="span" variant="devSubHead" display="inline">
              Commercial
            </Text>{" "}
            uses like office buildings, retail shops
            <br />
            <Text as="span" variant="devSubHead" display="inline">
              Industrial/Manufacturing
            </Text>{" "}
            uses like factories, sewage treatment plants
            <br />
            <Text as="span" variant="devSubHead" display="inline">
              Transportation/Utility
            </Text>{" "}
            uses like bus garages, power stations, water resource facilities
            <br />
            <Text as="span" variant="devSubHead" display="inline">
              Public Facilities & Institutions
            </Text>{" "}
            uses like government buildings, schools, hospitals
            <br />
          </Text>
        </Flex>
        <Box marginTop="170px" marginBottom="85px">
          <NextLink to="/part2/section3" >
            <NavPill round={false} fontSize="26px" fontColor="#908E8E" marginRight="20px" padding="0px 25px" className="bottomnav" width="100%" justifyContent="left" >
            3. Stakeholder Perspectives on Neighborhood Development
            </NavPill>
          </NextLink>
        </Box>
      </Main>
    </>
  );
};

export default SectionTwo;
