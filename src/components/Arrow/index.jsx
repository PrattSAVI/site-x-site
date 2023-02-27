import whiteArrow from "../../public/images/whiteArrow.svg";
import greyArrow from "../../public/images/greyArrow.svg";
import blackArrow from "../../public/images/blackArrow.svg";
import styled from "styled-components";
import css from "@styled-system/css";

const Arrow = styled("img").attrs(({ $arrowType }) => ({
  ...($arrowType === "white" && {
    src: whiteArrow,
  }),
  ...($arrowType === "grey" && {
    src: greyArrow,
  }),
  ...($arrowType === "black" && {
    src: blackArrow,
  }),
  alt: "arrow",
}))(
  ({$direction, width, height})=> css({
    width: width || "20px",
    height: height || "20px",
    marginLeft: "10px",
    marginTop: "10px",
    ...( $direction === "left" && {
        transform: "rotate(180deg)",
    }),
    ...( $direction === "right" && {
        transform: "rotate(0deg)",
    }),
    ...( $direction === "down" && {
        transform: "rotate(90deg)",
    }),
    ...( $direction === "up" && {
        transform: "rotate(270deg)",
    }),
  })
);

export default Arrow;
