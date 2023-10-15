import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const AlertContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: ${pxToRem(24)};
  left: 0;
  display: flex;
  justify-content: center;
`;

export const AlertBox = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.colors.utils.danger};
  padding: ${pxToRem(16)};
  border-radius: ${pxToRem(8)};

  span {
    color: ${({ theme }) => theme.colors.background.base};
  }
`;
