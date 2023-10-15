import {
  ForecastGetParams,
  ForecastRepository,
} from "../domain/ForecastRepository";

export function getForecast(
  forecastRepository: ForecastRepository,
  params: ForecastGetParams
) {
  const forecast = forecastRepository.getForecast(params);
  return forecast;
}
