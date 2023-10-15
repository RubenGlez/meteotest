import { createContext } from "react";
import {
  DailyForecast,
  Forecast,
  HourlyForecast,
} from "../core/domain/Forecast";
import { ForecastGetParams } from "../core/domain/ForecastRepository";

export interface ForecastContextState {
  days: Forecast | undefined;
  hours: DailyForecast["hourlyForecast"] | undefined;
  getForecast: (params: ForecastGetParams) => void;
  handleSelectDay: (day: DailyForecast) => void;
  handleSelectHour: (hour: HourlyForecast) => void;
  selectedDayTimestamp: DailyForecast["timestamp"] | undefined;
  selectedHourTimestamp: HourlyForecast["timestamp"] | undefined;
  currentTemperature: HourlyForecast["temperature"] | undefined;
  currentDescription: HourlyForecast["description"] | undefined;
  currentMaxTemperature: HourlyForecast["maxTemperature"] | undefined;
  currentMinTemperature: HourlyForecast["minTemperature"] | undefined;
  currentIcon: HourlyForecast["icon"] | undefined;
  error: string | undefined;
}

export const ForecastContext = createContext({} as ForecastContextState);
