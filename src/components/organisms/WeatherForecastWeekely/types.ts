import { DailyForecast, Forecast } from "../../../core/domain/Forecast";

export interface WeatherForecastWeekelyProps {
  days: Forecast;
  handleSelectDay: (day: DailyForecast) => void;
  selectedDayTimestamp: DailyForecast["timestamp"];
}
