import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const StyledImg = styled.img<{ $size: number }>`
  width: ${({ $size }) => pxToRem($size)};
  height: ${({ $size }) => pxToRem($size)};
`;
