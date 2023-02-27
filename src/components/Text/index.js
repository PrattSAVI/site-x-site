import styled from "styled-components";
import Box from "../Box";

const Text = styled(Box)(({ theme, variant, ...otherProps }) => ({
  ...(variant && {
    ...theme.typography[variant],
  }),
}));

export default Text;
