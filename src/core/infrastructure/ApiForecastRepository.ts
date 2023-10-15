import {
  ForecastGetParams,
  ForecastRepository,
} from "../domain/ForecastRepository";
import ApiError from "./ApiError";
import { createForecastDTO } from "./ForecastDTO";

const ENDPOINT = "https://api.openweathermap.org/data/2.5/forecast";

async function getForecast({ appid, city, lang }: ForecastGetParams) {
  try {
    const response = await fetch(
      `${ENDPOINT}?appid=${appid}&units=metric&lang=${lang}&q=${city}&mode=json`
    );

    if (!response.ok) {
      throw new ApiError(
        "Fetch successfull, but something wrong",
        response.status
      );
    }

    const data = await response.json();
    const forecastDTO = createForecastDTO(data);
    return forecastDTO;
  } catch (error) {
    throw new ApiError("Error fetching forecast", 500);
  }
}

export function createAPIForecastRepository(): ForecastRepository {
  return {
    getForecast,
  };
}
