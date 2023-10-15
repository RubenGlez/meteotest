import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const TabContentWrapper = styled.div`
  padding: ${pxToRem(16)};
  bacground-color: ${({ theme }) => theme.colors.background.base};
`;
