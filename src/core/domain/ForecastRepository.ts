import { Forecast } from "./Forecast";

export interface ForecastGetParams {
  appid: string;
  lang: string;
  city: string;
}

export interface ForecastRepository {
  getForecast: (params: ForecastGetParams) => Promise<Forecast>;
}
