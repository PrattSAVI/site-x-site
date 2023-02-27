import React from "react";
import Text from "../Text";
import Flex from "../Flex";
import NavPill, { NavPillLink } from "./";
import Arrow from "../Arrow";
import styled from "styled-components";

const FooterNavPillText = styled(Text)(({ theme }) => ({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const FooterNavPill = ({ text, linkTo }) => {
  return (
    <NavPill
      className="navpill"
      round={false}
      px="25px"
      fontColor="fullSiteGrey"
      textAlign="left"
      textDecoration="none"
      justifyContent="flex-start"
    >
      <NavPillLink href={linkTo} width="100%">
        <Flex justifyContent="space-between" width="100%" >
          <FooterNavPillText
            className="navpill"
            fontSize={6}
            color="#908E8E"
            textDecoration="none"
            as="span"
            fontWeight="bold"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
          <Arrow
            $arrowType="grey"
            $direction="right"
            width="35px"
            height="35px"
          />
        </Flex>
      </NavPillLink>
    </NavPill>
  );
};

export default FooterNavPill;
