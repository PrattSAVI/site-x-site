import styled from "styled-components";
import { system } from "styled-system";
import {
  compose,
  space,
  color,
  border,
  layout,
  typography,
  position,
  background,
  shadow,
  grid,
} from "styled-system";

// @eslint-disable-next-line no-unused-vars
const whiteSpace = system({
  prop: "whiteSpace",
  cssProperty: "white-space",
});

const customProps = () => {
  return system({ whiteSpace: true });
};

const Box = styled.div(
  {
    boxSizing: "border-box",
    display: "block",
  },
  compose(
    space,
    color,
    border,
    layout,
    typography,
    position,
    background,
    shadow,
    grid,
  ),
  customProps()
);

export default Box;
