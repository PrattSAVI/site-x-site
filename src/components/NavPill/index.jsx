import styled from "styled-components";
import Flex from "../../components/Flex";
import css from "@styled-system/css";
import { Link } from "react-router-dom";

export const NavPillLink = styled(Link)({
  textDecoration: "none",
  width: "100%",
});

const NavPill = styled(Flex)(
  ({ theme, fontColor, round, nowrap, justifyContent, textAlign }) =>
    css({
      height: "65px",
      borderRadius: round ? "50%" : "40px",
      borderStyle: `solid`,
      borderWidth: "1px",
      borderColor: `${fontColor || "#ffffff"}`,
      fontWeight: 700,
      display: "flex",
      justifyContent: justifyContent || "center",
      alignItems: "center",
      color: `${fontColor || "#ffffff"}`,
      textAlign: textAlign || "center",
      whiteSpace: nowrap ? "nowrap" : "unset",
      "& > a": {
        textDecoration: "none",
      },
    })
);

export default NavPill;
