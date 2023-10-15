import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const TabContainer = styled.li<{ $isSelected: boolean }>`
  position: relative;
  list-style: none;
  margin: 0;
  height: ${pxToRem(40)};
  background-color: ${({ theme, $isSelected }) =>
    $isSelected
      ? theme.colors.background.base
      : theme.colors.background.level1};
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0 ${pxToRem(16)};

  &:hover {
    span {
      color: ${({ theme }) => theme.colors.text.active};
    }
  }
`;
