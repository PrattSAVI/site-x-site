import React from "react";
import styled from "styled-components";
import Box from "../Box";

export const ImageMod = styled(Box)(({ theme, width }) => ({
  width: width || "100%",
  position: "relative",
  "& > img": {
    objectFit: "contain",
    width: `${width || "100%"} !important`,
    position: "relative !important",
    height: "unset !important",
  },
}));

const ImageExtended = ({ src, alt, ...props }) => {
  return (
    <ImageMod {...props}>
      <img src={src} alt={alt} />
    </ImageMod>
  );
};

export default ImageExtended;
