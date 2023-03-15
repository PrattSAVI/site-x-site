import React from "react";
import Text from "../../components/Text";
import Flex from "../../components/Flex";
import Main from "../../components/Main";
import Header from "../../components/Header";
import masNYCLogo from "../../public/images/logo_mas.png";
import rpaLogo from "../../public/images/logo_rpa.png";
import nyctLogo from "../../public/images/logo_nyct.png";
import livableLogo from "../../public/images/logo_lnp.png";
import saviLogo from "../../public/images/logo_savi_wide.svg";
import ImageExtended from "../../components/ImageExtended";

const About = () => {
  return (
    <>
      <Header
        isDev101pageHeader
        sectionId="ABOUT"
        pillTitle={"Methodology"}
        // title="Collaborators"
        subTitle="&#x2022; Collaborators"
        logoStyle={"outline"}
      />
      <Main navType="methods">
        <Flex as="section" className="flex-column" >
          <Text
            as="h3"
            variant="header"
            color="part2Header"
            marginTop="105px"
            marginBottom="21px"
          >
            Collaborators
          </Text>
          <Flex flexDirection="row" className="flex-par" >
            <Flex flexDirection="column"  width="60%" marginRight="60px" >
              <ImageExtended
                src={masNYCLogo}
                width="200px"
              />
            </Flex>
            <Text as="p" variant="devParagraph" className="dev-par"  padding="0px" margin="0px">
              <Text as="span" fontWeight="bold">
                The Municipal Art Society of New York (MAS)
              </Text>
              For over 125 years, the Municipal Art Society of New York (MAS)
              has worked to educate and inspire New Yorkers to engage in the
              betterment of our city. As a non-profit advocacy organization, MAS
              mobilizes diverse allies to focus on issues that affect our city
              from sidewalk to skyline. Through three core campaign areas, MAS
              protects New York’s legacy spaces, encourages thoughtful planning
              and urban design, and fosters inclusive neighborhoods across the
              five boroughs.
            </Text>
          </Flex>
          <Flex flexDirection="row" className="flex-par" >
            <Flex flexDirection="column"  width="60%" marginRight="60px" >
            <ImageExtended
                src={livableLogo}
                width="200px"
              />
            </Flex>
            <Text as="p" variant="devParagraph" className="dev-par"  padding="0px" margin="0px">
              <Text as="span" fontWeight="bold">
                Livable Neighborhoods Program (LNP)
              </Text>
              Founded on the principle that community involvement is essential
              to successful city planning, the Livable Neighborhoods Program
              (LNP) helps local leaders in under-resourced communities develop
              the knowledge and tools that they need to participate effectively
              in public land use review processes and engage in creative,
              community-based design and planning.
            </Text>
          </Flex>
          <Flex flexDirection="row" className="flex-par" >
            <Flex flexDirection="column"  width="60%" marginRight="60px" >
              <ImageExtended
                src={rpaLogo}
                width="200px"
              />
            </Flex>
            <Text as="p" variant="devParagraph" className="dev-par"  padding="0px" margin="0px">
              <Text as="span" fontWeight="bold">
                Regional Plan Association (RPA)
              </Text>
              Regional Plan Association is an independent, not-for-profit civic
              organization that develops and promotes ideas to improve the
              economic health, environmental resiliency and quality of life of
              the New York metropolitan area. RPA conducts research on
              transportation, land use, housing, good governance and the
              environment. RPA advises cities, communities and public agencies.
              And RPA advocates for change that will contribute to the
              prosperity of all residents of the region.
            </Text>
          </Flex>
          <Flex flexDirection="row" className="flex-par" >
            <Flex flexDirection="column"  width="60%" marginRight="60px" >
              <ImageExtended
                  src={nyctLogo}
                  width="200px"
                />
            </Flex>
            <Text as="p" variant="devParagraph" className="dev-par"  padding="0px" margin="0px">
              <Text as="span" fontWeight="bold">
                New York Community Trust (NYCT)
              </Text>
              A public charity, The New York Community Trust (NYCT) is a
              grantmaking foundation dedicated to improving the lives of
              residents of New York City, Long Island, and Westchester. We bring
              together individuals, families, foundations, and businesses to
              build a better community and support nonprofits that make a
              difference. We apply knowledge, creativity, and resources to the
              most challenging issues in an effort to ensure meaningful
              opportunities and a better quality of life for all New Yorkers,
              today and tomorrow.
            </Text>
          </Flex>
          <Flex flexDirection="row" className="flex-par" mb="85px">
            <Flex flexDirection="column"  width="60%" marginRight="60px" >
              <ImageExtended
                  src={saviLogo}
                  width="200px"
                />
              </Flex>
            <Text as="p" variant="devParagraph" className="dev-par"  padding="0px" margin="0px">
              <Text as="span" fontWeight="bold">
                PRATT Spatial Analysis and Visualization Initiative (SAVI)
              </Text>
              The Spatial Analysis and Visualization Initiative (SAVI) is an
              interdisciplinary research, consulting, and education center
              focusing on spatial data and visual storytelling.
            </Text>
          </Flex>
        </Flex>
      </Main>
    </>
  );
};

export default About;
