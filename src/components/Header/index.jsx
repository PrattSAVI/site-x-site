import React from "react";
import styled from "styled-components";
import Flex from "../../components/Flex";
import Box from "../../components/Box";
import Text from "../../components/Text";
import logoSVG from "../../public/images/SiteXSite_logo.svg";
import logoBlackSVG from "../../public/images/SiteXSite_logo_black.svg";
import { Link } from "react-router-dom";
import NavPill from "../NavPill";
import css from "@styled-system/css";
import Arrow from "../../components/Arrow";
import sec1Image from "../../public/images/primer_opener_1.jpg";
import sec2Image from "../../public/images/primer_opener_2.jpg";
import sec3Image from "../../public/images/primer_opener_3.jpg";
import sec4Image from "../../public/images/primer_opener_4.jpg";
import mapImage from "../../public/images/map_opener.jpg";
import homeImage from "../../public/images/Landing_125St-min.jpg";

const NextLink = styled(Link)(css({
  display: "flex",
  alignItems: "center",
  justifyContent: "right",
  textDecoration: "none",
  color:"#908E8E",
  "&:hover": {
    color: "#6BB219",
  },
}))

const HeaderContainer = styled.header(({ theme, $bgImage }) =>
  css({
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "part2Header",
    ...($bgImage && {
      backgroundSize: "cover",
    }),
    ...($bgImage === "sec1" && {
      backgroundImage: `url(${sec1Image})`,
    }),
    ...($bgImage === "sec2" && {
      backgroundImage: `url(${sec2Image})`,
    }),
    ...($bgImage === "sec3" && {
      backgroundImage: `url(${sec3Image})`,
    }),
    ...($bgImage === "sec4" && {
      backgroundImage: `url(${sec4Image})`,
    }),
    ...($bgImage === "map" && {
      backgroundImage: `url(${mapImage})`,
    }),
    ...($bgImage === "home" && {
      backgroundImage: `url(${homeImage})`,
    }),
  })
);

const TitleWrapper = styled(Flex)(({ theme }) => ({
  width: "100%",
  backgroundColor: `${theme.colors.teal}80`,
  padding: "25px",
}));

const LogoPlaceHolder = styled("img").attrs(({ $logoStyle }) => ({
  ...($logoStyle === "outline" && {
    src: logoSVG,
  }),
  ...($logoStyle === "black" && {
    src: logoBlackSVG,
  }),
}))(({ width, height }) => ({
  width: width || "240px",
  height: height || "150px",
}));

const Title = styled(Text)(({ theme }) => ({
  color: "white",
  fontSize: theme.fontSizes[9],
}));

// const SubTitle = styled(Text)(({ theme }) => ({
//   width: "420px",
//   textAlign: "left",
//   color: "white",
// }));

const Header = ({
  sectionId,
  pillTitle,
  title,
  subTitle,
  subTitle2,
  subTitle3,
  subTitle4,
  bgImage,
  logoStyle,
  isHomepageHeader,
  isDev101pageHeader,
}) => {
  if (isHomepageHeader) {
    return (
      <HeaderContainer $bgImage={bgImage} className="header">
        <TitleWrapper
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Box width="320px">
            < LogoPlaceHolder $logoStyle="black" width="320px" height="214px" />
            <Text
              fontSize={7}
              fontWeight="bold"
              lineHeight="1"
              maxWidth="320px"
              m="10px"
              color="black"
            >
              New York City Development Archive 2007-2022
            </Text>
          </Box>
          <Flex justifyContent="center">
          <Arrow $arrowType="white" $direction="down" width="70px" height="70px" /> 
          </Flex>
        </TitleWrapper>
      </HeaderContainer>
    );
  }
  if (isDev101pageHeader) {
    return (
      <HeaderContainer $bgImage={bgImage}>
        <TitleWrapper
          flexDirection="column"
          height="100%"
          // justifyContent="space-between"
        >
          <Flex justifyContent="space-between" width="100%">
            <Flex alignItems="flex-start">
              {/* <NavPill round={true} fontSize="20px" lineHeight="1.1" width="65px" height="65px" marginRight="170px">
                {sectionId}
              </NavPill> */}
              {/* <Box width="200px" borderBottom="0px solid white" height="1px" /> */}
              <NavPill
                padding="0 25px"
                fontSize={8}
                nowrap
                dangerouslySetInnerHTML={{ __html: pillTitle }}
                className="header-pill"
              />
            </Flex>
            <Link to="/">
              <LogoPlaceHolder $logoStyle={logoStyle} />
            </Link>
          </Flex>
          <Flex flexDirection="column" marginTop="auto" marginBottom="125px">
            {/* <Flex flexDirection="row" > */}
              <Title
                paddingLeft="185px"
                marginRight="50px"
                mb="10px"
                variant="sectionTitle"
                as="h1"
                dangerouslySetInnerHTML={{ __html: title }}
                className="sub"
              />
            {/* </Flex>
            <Flex flexDirection="column" > */}
            {subTitle && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub">
                {subTitle}
              </Text>
            )}
            {subTitle2 && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub">
                {subTitle2}
              </Text>
            )}
            {subTitle3 && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub">
                {subTitle3}
              </Text>
            )}
            {subTitle4 && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub">
                {subTitle4}
              </Text>
            )}
          </Flex>
            <Arrow 
              $arrowType="white" 
              $direction="down" 
              width="30px" 
              height="30px" 
              className="devArrow"

              /> 
        </TitleWrapper>
      </HeaderContainer>
    );
  }
    return (
      <HeaderContainer $bgImage={bgImage}>
        <TitleWrapper
          flexDirection="column"
          height="100%"
          justifyContent="space-between"
        >
          <Flex justifyContent="space-between" width="100%">
            <Flex alignItems="flex-start">
              {/* <NavPill round={true} fontSize="20px" lineHeight="1.1" width="65px" height="65px" marginRight="170px">
                {sectionId}
              </NavPill> */}
              {/* <Box width="200px" borderBottom="0px solid white" height="1px" /> */}
              <NavPill
                padding="0 25px"
                fontSize={8}
                nowrap
                dangerouslySetInnerHTML={{ __html: pillTitle }}
                className="header-pill"
              />
            </Flex>
            <Link to="/">
              <LogoPlaceHolder $logoStyle={logoStyle} />
            </Link>
          </Flex>
          <Flex flexDirection="column" marginTop="auto" marginBottom="105px">
            {/* <Flex flexDirection="row" > */}
              <Title
                paddingLeft="185px"
                marginRight="50px"
                mb="10px"
                variant="sectionTitle"
                as="h1"
                dangerouslySetInnerHTML={{ __html: title }}
                className="sub"
              />
            {/* </Flex>
            <Flex flexDirection="column" > */}
            {subTitle && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub" >
                {subTitle}
              </Text>
            )}
            {subTitle2 && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub">
                {subTitle2}
              </Text>
            )}
            {subTitle3 && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub">
                {subTitle3}
              </Text>
            )}
            {subTitle4 && (
              <Text fontSize="36px" mt="0px" paddingLeft="185px" color="white" className="sub">
                {subTitle4}
              </Text>
            )}
          </Flex>
          {/* <Box marginTop="170px" marginBottom="25px" > */}
          <NextLink to="/part1" >
            <NavPill round={false} fontSize="26px" fontColor="#ffffff" padding="0px 25px" className="bottomnav mapstart" width="auto" >
            START HERE
            </NavPill>
          </NextLink>
        {/* </Box> */}
        </TitleWrapper>
      </HeaderContainer>
    );
  }

export default Header;
