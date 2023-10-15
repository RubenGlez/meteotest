import styled from "styled-components";
import { pxToRem } from "../../../styles/utils";

export const WeatherForecastCurrentCard = styled.section`
  display: flex;
  justify-content: space-between;
`;
export const WeatherForecastCurrentColumn = styled.div``;

export const WeatherForecastCurrentTemperature = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(16)};
  margin-bottom: ${pxToRem(8)};

  span {
    font-size: 4rem;
  }
`;
