import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const HeaderContainer = styled.header`
  height: ${pxToRem(60)};
  background-color: ${({ theme }) => theme.colors.background.base};
  padding: 0 ${pxToRem(16)};
  box-shadow: 0px 0px ${pxToRem(20)} 0px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainerColumn = styled.div``;
