import styled, { css } from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const WeatherForecastHourlyContainer = styled.div`
  margin-top: ${pxToRem(40)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(8)};
`;

export const WeatherForecastHourlyList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: ${pxToRem(8)};
`;

export const WeatherForecastHourlyCard = styled.li<{ $isSelected: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid
    ${({ theme, $isSelected }) =>
      $isSelected ? theme.colors.text.active : theme.colors.background.level2};
  border-radius: ${pxToRem(8)};
  padding: ${pxToRem(8)};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  flex: 1 1 0;

  ${({ theme, $isSelected }) =>
    !$isSelected &&
    css`
      &:hover {
        border: 1px solid ${theme.colors.background.level3};
      }
    `};
`;
