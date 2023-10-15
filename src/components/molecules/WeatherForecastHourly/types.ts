import { HourlyForecast } from "../../../core/domain/Forecast";

export interface WeatherForecastHourlyProps {
  hours: HourlyForecast[];
  handleSelectHour: (hour: HourlyForecast) => void;
  selectedHourTimestamp: HourlyForecast["timestamp"];
}
