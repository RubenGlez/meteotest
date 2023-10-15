import styled, { css } from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const LangSelectorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.level1};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(6)};
  display: inline-block;
`;

export const LangSelectorList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
  gap: ${pxToRem(8)};
`;

export const LangSelectorItem = styled.li<{
  $isSelected: boolean;
}>`
  cursor: pointer;
  background-color: ${({ theme, $isSelected }) =>
    $isSelected ? theme.colors.background.base : "transparent"};
  border-radius: ${pxToRem(4)};
  padding: ${pxToRem(4)} ${pxToRem(8)};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      box-shadow: 0px 0px ${pxToRem(8)} 0px rgba(0, 0, 0, 0.1);
    `};

  ${({ $isSelected }) =>
    !$isSelected &&
    css`
      span:hover {
        color: ${({ theme }) => theme.colors.text.active};
      }
    `};
`;
