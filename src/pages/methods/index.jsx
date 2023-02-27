import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Box from "../../components/Box";
import Header from "../../components/Header";
import layers from "../../public/images/methods/layers.png";
import criteria from "../../public/images/methods/soft_site_criteria.png";
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

const Methodology = () => {
  return (
    <>
      <Header
        isDev101pageHeader
        sectionId="ABOUT"
        pillTitle={"Methodology"}
        subTitle="+ Methodology"
        subTitle2="+ Sources"
        logoStyle={"outline"}
      />
      <Main navType="methods">
        <Flex as="section" className="flex-column" >
          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            marginTop="0px"
            marginBottom="21px"
          >
            Methodology 
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par"  mb="60px" mt="10px">
            SITE x SITE utilizes publicly available datasets, validated by 
            statistical modeling and historical trends, to simulate soft site 
            identification according to CEQR guidelines and compare the outcomes 
            against actual development. Further details on methodology as well 
            as the steps taken in data validation can be found in the Methodology 
            and Appendix chapters of our companion report, SITE x SITE: A Lookback 
            at Soft Site Development in New York City.* 
            </Text>
            <ImageExtended src={layers} />
            <Text as="p"  variant="caption"  mb="60px">
            CAPTION: The steps taken in the SITE x SITE study. Soft sites are sites where 
            development is not currently proposed or being planned, but may be expected to 
            occur by the final year through which the main project is studied (“build year”) 
            under CEQR. SITE x SITE compares soft sites as described in the CEQR Technical 
            Manual against lots that were actually developed. The analysis of soft sites consists 
            of all recent development, including that which is as-of-right and would not typically 
            be studied under the CEQR process.
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par"  mb="60px">
          SITE x SITE does not identify new variables for determining soft site development. 
          Rather, the study employs existing variables covered under CEQR that contribute the most 
          to development trends on the borough and Public Use Microdata Area (PUMA) levels and 
          examines them in the context of recent rezonings. 
          </Text>
          <Text variant="devSubHead" mb="5px" >Simulating CEQR</Text>
          <Text as="p" variant="devParagraph" className="dev-par"  mb="60px">
          The CEQR Technical Manual guidelines recommend screening lots according to size and 
          bulk as indicated by lot area and floor area ratio (FAR). If a lot’s area is greater 
          than 5,000 square feet and it has a substantial amount of available unbuilt FAR, the Technical 
          Manual’s assumption is that the lot is sufficiently large and underbuilt to be considered for 
          future development. Projects can diverge from this criteria on a site-specific basis. For 
          the purposes of identifying soft sites against a baseline, this study adopts a lot area 
          threshold of at least 5,000 square feet (inclusive) and assumes a threshold of at least 
          50% available FAR. The thresholds were selected to produce conservative estimates and 
          are also consistent with the soft site methodologies of several rezonings that feature 
          in SITE x SITE’s case studies. Recently developed lots that do not pass the initial 
          soft site screening are analyzed in the context of broader neighborhood geographies, 
          including boroughs, PUMAs, and select City-led rezonings.
          </Text>
      
          <Text as="p" variant="devParagraph" className="dev-par"  mb="60px">
          In further narrowing down the pool of soft sites, the CEQR Technical Manual’s methodology accounts 
          for lots that are generally unlikely to be redeveloped because they contain buildings or uses that 
          are difficult to relocate or demolish: certain utility uses, institutional uses, and buildings that 
          contain rent stabilized units. In SITE x SITE’s operationalization of this step, the selection of 
          data points was further refined to include full-block and new institutional and open space uses as 
          well as landmarked sites.
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par"  mb="20px">
          The Technical Manual makes the assumption that residential buildings constructed 
          before 1974 that contain six or more units are likely to be rent stabilized. 
          Although rent stabilized units can be deregulated, there are specific conditions 
          for doing so; the CEQR proxy therefore concludes that rent stabilized units are 
          difficult to legally demolish. In comparing the results under this proxy to actual 
          rent stabilized units as reported in tax rolls, we found that the CEQR Technical 
          Manual proxy captured 93 percent of all rent stabilized units in New York City. 
          </Text>
          <ImageExtended src={ criteria }/>
          <Text as="p"  variant="caption"  mb="60px">
          CAPTION: This study’s operationalization of relevant site attributes demonstrates one interpretation 
          of soft site methodology according to the CEQR Technical Manual. The CEQR Technical Manual’s additional 
          considerations are most interpretive, with the intention of facilitating some discretion on a project-by-project 
          basis. While the broad definitions allow flexibility, they can also lead to inconsistencies in soft site criteria.
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par"  mb="60px">
          More information can be found in the SITE x SITE: A Lookback at Soft Site Development in New Y
          ork City report, Chapters 3 (Methodology) and 5 (Appendix).
          </Text>

          <Text
            as="h2"
            variant="sectionHeadTitle"
            color="part2Header"
            marginTop="0px"
            marginBottom="21px"
          >
            Sources
          </Text>
          <Text as="p" variant="devParagraph" className="dev-par"  mb="60px">
          To examine New York City development over a ten year period, New York City tax lot data from MapPluto™ was first 
          used to compile a dataset spanning 2007 through 2017 data to look at historical outcomes of the CEQR process. 
          That analysis forms the basis for contemporary analysis for use in the SITE x SITE web tool that is suited to 
          interactive data visualization and covers the years from 2012 through 2022. 
          <br /> <br /> 
          MapPLUTO contains over 850,000 tax lots with more than 70 attribute fields. In order to present this spatial data 
          on a website, it was subset and reduced to essential fields and lot types. One subset  contains all sites developed 
          between 2012 and 2022, and the other contains lots that would have been considered soft sites or that met other 
          criteria CEQR identifies as factors in development such as zoning changes, and social and neighborhood conditions 
          in 2012. From these two datasets, a SITE x SITE user is able to follow the process CEQR outlines in its review 
          process. 
          <br /> <br /> 
          Recently developed sites are identified as lots that were built after 2011 or lots that were merged, or increased 
          in size. Merged lots were identified by comparing 2012 to 2022 lots and finding all that disappeared or increased 
          in size.
          <br /> <br /> 
          Soft sites are lots that met the following criteria in 2012: 
          <ul>
              <li>were larger than or equal to 5,000 sf,</li>
              <li>had 50% or more Allowable Floor Area Ratio (FAR) which was calculated by finding the greater of total allowable FAR For each site (commercial or residential) and subtracting the Built FAR,</li>
              <li>Did not contain rent stabilized units according to the CEQR proxy,</li>
              <li>were not landmarked, </li>
              <li>did not have the following land uses: Transportation & Utility (7), Public Facilities & Institutions (8), Open Space & Outdoor Recreation (9),</li>
              <li>did not have uses that were considered difficult to relocate according to CEQR documents: 
                <a href="https://www1.nyc.gov/assets/finance/jump/hlpbldgcode.html"  target="_blank"  rel="noopener noreferrer" className="link"> building classes</a>: Q0 Q1 T1 T2 U1 U2 U3 W1 Z5 Z8 (utilities, transportation facilities, education facilities, city agencies, parks.</li>
          </ul>
          <br /> 
          Rent stabilization is identified with the proxy used by CEQR: sites with buildings containing 6 or more units and 
          built before 1974. Rent Stabilization is also identified through analysis for the 2007-2017 historical study. 
          These values are scraped from tax documents and some missing values were extrapolated between known values 
          through years per each lot, All missing years: 
          <a href="https://www1.nyc.gov/site/finance/taxes/property-tax-bills.page"  target="_blank"  rel="noopener noreferrer" className="link"> NYC Property Tax Bills</a>. 
          Work by John Krauss (2007-2011) and Chris Whong (2014) has also been consulted to establish where rent 
          stabilization was present during these years. SITE x SITE compares this analysis for 2012 with the results 
          of the CEQR proxy for 2012 tax lots.
          <br /> <br /> 
          Other indicators considered in SITE x SITE:
          <br /> <br /> 
          <Text as="p" variant="devSubHead" >Social and neighborhood conditions: </Text>
          2007 -2017 analysis utilizes population and housing data from the American Community Survey, 5 year survey at a PUMA (Public Use Microdata Areas) 
          geographic level.  The recently created Equitable Development Explorer and Displacement Risk Index is used for 2012-2022. For consistency and 
          because the historical analysis is done at a PUMA level, the EDDR data that was created at a NTA level (Neighborhood Tabulation Area scale) is 
          joined to PUMAs with a proportional weight based on population totals.
          <br /> <br /> 
          <Text as="p" variant="devSubHead" >Development trends:  </Text>
          Department of Building Permit issuance data was accessed in October, 2022 and all permits (Type 1, Demo, New Construction) issued between 2012 
          and 2022 are aggregated to the tax lot and then joined to half mile hexagons to facilitate visualization and understanding of the geographic 
          distribution of those permits. 
          <br /> <br /> 
          <Text as="p" variant="devSubHead" >Assessed Value Increase:   </Text>
          The percent that a site value increases when built upon is estimated by subtracting the Assessed Land Value from the Assessed Total value and 
          dividing that by the Assessed Total. These attributes are available for every tax lot in the MapPLUTO datasets. 
          <br /> <br /> 
          Merged, Assembled and lots that disappeared are identified by comparing the Borough Block Lot numbers (BBLs) and the lot areas in 2012 MapPLUTO with those in 2022. 
          <br /> <br /> 
          Limitations to development are visualized using datasets available from the New York City Planning Department website:
          <br />
          <ul>
              <li>Zoning amendments adopted in the last 10 years as of June 6, 2022</li>
              <li>WRP Coastal Boundary Zones, 2016</li>
              <li>Special Maritime and Industrial Districts, 2016</li>
              <li>Historic Districts, March 2022</li>
          </ul>
          <br /> <br /> 
          Lot compactness is calculated using the 2012 lot geometry in MapPLUTO and the Polsby Popper equation. 

          </Text>

        </Flex>
        <Box marginTop="345px" marginBottom="85px">
          <NextLink to="/methods/glossary" >
            <NavPill round={false} fontSize="26px" fontColor="#908E8E" marginRight="20px" padding="0px 25px" className="bottomnav" width="100%" justifyContent="left" >
            2. Glossary
            </NavPill>
          </NextLink>
        </Box>
      </Main>
    </>
  );
};

export default Methodology;