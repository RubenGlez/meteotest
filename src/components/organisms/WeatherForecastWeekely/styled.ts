import styled, { css } from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const WeatherForecastWeekelyContainer = styled.div`
  margin-top: ${pxToRem(24)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`;

export const WeatherForecastWeekelyList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${pxToRem(16)};
`;

export const WeatherForecastWeekelyCard = styled.li<{ $isSelected: boolean }>`
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.text.active : theme.colors.background.level1};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(16)};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(16)};
  cursor: pointer;
  transition: color ease-in-out 150ms;
  flex: 1 1 0;
  list-style: none;
  margin: 0;

  ${({ theme, $isSelected }) =>
    !$isSelected &&
    css`
      &:hover {
        border: 1px solid ${theme.colors.background.level3};
      }
    `};
`;

export const WeatherForecastWeekelyCardTemps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(8)};
`;
