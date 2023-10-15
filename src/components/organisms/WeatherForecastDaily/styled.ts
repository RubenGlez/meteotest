import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const WeatherForecastDailyCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.background.level1};
  border-radius: ${pxToRem(16)};
  padding: ${pxToRem(24)};
`;
