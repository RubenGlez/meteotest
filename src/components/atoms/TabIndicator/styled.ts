import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const TabIndicatorBar = styled.div`
  height: ${pxToRem(4)};
  background-color: ${({ theme }) => theme.colors.text.active};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
`;
