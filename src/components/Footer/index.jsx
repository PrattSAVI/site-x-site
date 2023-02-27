import React from "react";
import Flex from "../../components/Flex";
// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import css from "@styled-system/css";
import Text from "../../components/Text";
import { useLocation } from "react-router-dom";

// const FooterLink = styled(Link)(
//   css(({ theme }) => ({
//     textDecoration: "none",
//     color: "fullSiteFooterLinkGrey",
//     fontWeight: "bold",
//     "&:hover": {
//       color: "fullSiteFooterLinkGrey",
//     },
//   }))
// );

const Footer = () => {
  const location = useLocation();
  if(location.pathname === "/part1") return null;
  return (
    <Flex
      width="90%"
      mx="auto"
      justifyContent="space-between"
      py="25px"
      alignItem="center"
      borderTop="solid 1px"
      borderColor="fullSiteGrey"
    >
      <Text fontSize={1} maxWidth="500px">
        SITE x SITE is a project of the Municipal Art Society of New York and
        the Regional Plan Association made possible by the support of the New
        York Community Trust.
      </Text>
    </Flex>
  );
};

export default Footer;
