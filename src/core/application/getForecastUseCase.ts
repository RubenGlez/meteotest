import {
  ForecastGetParams,
  ForecastRepository,
} from "../domain/ForecastRepository";

export function getForecastUseCase(forecastRepository: ForecastRepository) {
  return async function (params: ForecastGetParams) {
    return forecastRepository.getForecast(params);
  };
}
