import styled from "styled-components";
import { TypographyProps } from "./types";

const FONT_SIZES = {
  s: "0.85rem",
  m: "1rem",
  l: "1.2rem",
};

const FONT_WEIGHTS = {
  thin: 300,
  normal: 400,
  bold: 600,
};

export const StyledText = styled.span<{
  $size: TypographyProps["size"];
  $color: TypographyProps["color"];
  $weight: TypographyProps["weight"];
  $transform: TypographyProps["transform"];
}>`
  color: ${({ theme, $color }) => theme.colors.text[$color!]};
  font-size: ${({ $size }) => FONT_SIZES[$size!]};
  font-weight: ${({ $weight }) => FONT_WEIGHTS[$weight!]};
  margin: 0;
  text-transform: ${({ $transform }) => $transform};

  transition: color ease-in-out 150ms;
`;
