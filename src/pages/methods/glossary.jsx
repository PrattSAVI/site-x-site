import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Box from "../../components/Box";
import Header from "../../components/Header";
// import FooterNavPill from "../../components/NavPill/FooterNavPill";
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

const Glossary = () => {
  return (
    <>
      <Header
        isDev101pageHeader
        sectionId="ABOUT"
        pillTitle={"Methodology"}
        // title="Glossary of Terms"
        subTitle="&#x2022; Glossary"
        subTitle2="&#x2022; Acronyms"
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
            Glossary of Terms
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            As-of-Right Development:
            </Text>{" "}
            Development that complies with all applicable zoning regulations and other laws, and does not require any discretionary action by the City Planning Commission (CPC) or Board of Standards and Appeals (BSA). Most development in the city is as-of-right.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Build Year: 
            </Text>{" "}
            The year when a proposed project would be substantially operational. The build year is used in City Environmental Quality Review (CEQR) analysis as the year in which the full effects of a project are expected to occur. A ten-year build year is generally used, as it captures a typical cycle of market conditions.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            City Environmental Quality Review (CEQR): 
            </Text>{" "}
            Pursuant to state law, the CEQR process identifies and assesses the expected effects of discretionary actions on the surrounding environment. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Community District (CD): 
            </Text>{" "}
            New York City is organized into 59 Community Districts. Each CD is represented by a Community Board, composed of volunteer community members (appointed by the Borough President and at least half of whom are nominated by local Council Members), that provides information to local residents and businesses and advises on planning and service issues.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Development:
            </Text>{" "}
            Either the construction of a new building or other structure on a zoning lot, the relocation of an existing building to another zoning lot, or the establishment of new open use on a tract of land.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Development Rights:
            </Text>{" "}
            An amount of floor area permissible on a zoning lot. When the floor area that has been built is less than the maximum amount of floor area permitted, the difference is often referred to as “unused development rights.”
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Discretionary Action:
            </Text>{" "}
            An action requiring the approval of either the CPC or the BSA. Discretionary actions include zoning amendments, special permits, authorizations, and variances.

          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Dwelling Unit: 
            </Text>{" "}
            Consists of one or more rooms in a residential building, or residential portion of a building, that also contains cooking and sanitary facilities and is inhabited by one or more persons living together, maintain- ing a common household. Most conventional apartments or houses in New York City consist of dwelling units.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Environmental Impact Statement (EIS): 
            </Text>{" "}
            The first step in the CEQR process is the completion of an EAS. An EAS contains a description of an action and its potential impacts on the environment.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Environmental Assessment Statement (EAS): 
            </Text>{" "}
            The first step in the CEQR process is the completion of an EAS. An EAS contains a description of an action and its potential impacts on the environment.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Floor Area Ratio (FAR): 
            </Text>{" "}
            The principal bulk regulation that controls the size of buildings. Each zoning district specifies a maximum FAR for a use which, when multiplied by the lot area of the zoning lot, produces the maximum amount of floor area allowable for that use on that zoning lot. 
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Improvement to Land Value Ratio (“Improvement Ratio”):
            </Text>{" "}
            A zoning provision that requires a share of new housing in areas rezoned for higher residential density to be permanently affordable to low- and moderate-income households. The required amount of affordable housing and income levels vary based on several options specified in the Zoning Resolution.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Lot Area:
            </Text>{" "}
            The area (typically measured in square feet) of a zoning lot.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Mandatory Inclusionary Housing (MIH):
            </Text>{" "}
            A zoning provision that requires a share of new housing in areas rezoned for higher residential density to be permanently affordable to low- and moderate-income households. The required amount of affordable housing and income levels vary based on several options specified in the Zoning Resolution.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Primary Land Use Tax Lot Output (PLUTO): 
            </Text>{" "}
            Extensive land use and geographic data at the tax lot level made available by the Department of City Planning (DCP).
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Soft Sites:
            </Text>{" "}
            Sites identified during CEQR where development is not currently proposed but may be reasonably expected to occur by the projected build year due to uses and bulk allowed, size of development site, recent real estate trends, amongst other factors.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Tax Lot:
            </Text>{" "}
            A parcel of land identified with a unique borough, block, and lot number for property tax purposes. A zoning lot typically comprises one or more adjacent tax lots within a block.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Transfer of Development Rights (TDR):
            </Text>{" "}
            In limited circumstances specified in the Zoning Resolution, TDRs allow the transfer of unused development rights from one zoning lot to another, to preserve historic buildings, open spaces or unique cultural resources. For such purposes, TDRs may be per- mitted where the transfer could not be accomplished through a zoning lot merger. In the case of a landmarked building, for example, a transfer may be made by CPC special permit to a broader area than permitted through a zoning lot merger.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Uniform Land Use Review Procedure (ULURP): 
            </Text>{" "}
            The City’s public land use review process, mandated by the City Charter, for certain discretionary actions, such as zoning map amendments, CPC special permits, site selections and acquisitions for City capital projects and disposition of City property. ULURP sets forth a clear time frame and process for public participa- tion and decision-making.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Reasonable Worst Case Development Scenario (RWCDS):
            </Text>{" "}
            In CEQR analyses, the RWCDS represents the conceptual maximum extent of potential development that can be expected on a project site or within a rezoning area over a set period of time based on proposed zoning and land use changes. By identifying the “worst case” estimates of future development, the RWCDS theoretically allows a more comprehensive analysis of the full impact development could have on traffic, schools, greenhouse gas emissions, socioeco- nomic conditions and other environmental areas.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Zoning District: 
            </Text>{" "}
            A specifically delineated area of the city within which various combinations of the zoning regulations govern land use, build- ing bulk, parking, and streetscape. Zoning districts include Residence Districts, Commercial Districts, and Manufacturing Districts, and are shown on the Zoning Maps.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Zoning Lot:
            </Text>{" "}
            A tract of land typically comprising a single tax lot or two or more adjacent tax lots within a block. An apartment building on a single zoning lot, for example, may contain separate condominium units, each occupying its own tax lot. Similarly, a building containing a row of town- houses may occupy several separate tax lots within a single zoning lot, or two or more detached homes on one zoning lot may each have its own tax lot. The zoning lot is the basic unit for zoning regulations and may be subdi- vided into two or more zoning lots. Two or more adjoining zoning lots on the same block may be merged, provided that all resulting zoning lots comply with applicable regulations.
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">
            Zoning Lot Merger: 
            </Text>{" "}
            The joining of two or more adjacent zoning lots into a single new zoning lot. As part of the merger, unused development rights may be located anywhere on the new lot, as-of-right, as long as the entire merged lot complies with all applicable provisions of the Zoning Resolution.
          </Text>
          <Text as="h2" variant="sectionHeadTitle"  color="part2Header"
            marginTop="100px"
            marginBottom="20px"
          >
            Acronyms
          </Text>
          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">ACRIS:</Text>{" "}
            Automated City Register Information System
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">BSA:</Text>{" "}
            Board of Standards and Appeals
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">CPC:</Text>{" "}
            City Planning Commission
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">DCP:</Text>{" "}
            New York City Department of City Planning
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">DOB:</Text>{" "}
            New York City Department of Buildings
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">DOF:</Text>{" "}
            New York City Department of Finance
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">EDDE:</Text>{" "}
            Equitable Development Data Explorer
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">DEIS:</Text>{" "}
            Draft Environmental Impact Statement
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">FEIS:</Text>{" "}
            Final Environmental Impact Statement
          </Text>

          <Text as="p"  variant="devParagraph" className="dev-par par-solo" >
            <Text as="span" variant="devSubHead" display="inline">OEC:</Text>{" "}
            New York City Mayor’s Office of Environmental Coordination
          </Text>

          <Text  variant="captions"  className="caption" mt="40px">
            Definitions from:
            <br /> NYC Department of City Planning, Zoning Handbook. 2018.
            <br /> NYC Mayor’s Office of Environmental Coordination, CEQR Technical Manual. 2021. 
            <br /> Regional Plan Association (RPA), Inclusive City: Strategies to achieve more equitable and predictable land use in New York City. 2018.
          </Text>
        </Flex>
        <Box marginTop="345px" marginBottom="85px">
          <NextLink to="/methods/about" >
            <NavPill round={false} fontSize="26px" fontColor="#908E8E" marginRight="20px" padding="0px 25px" className="bottomnav" width="100%" justifyContent="left" >
            3. Collaborators
            </NavPill>
          </NextLink>
        </Box> 
      </Main>
    </>
  );
};

export default Glossary;
