import { HourlyForecast } from "../../../core/domain/Forecast";
import { WeatherIconProps } from "../../atoms/WeatherIcon/types";

export interface WeatherForecastDailyProps {
  temperature: number;
  description: string;
  minTemperature: number;
  maxTemperature: number;
  hours: HourlyForecast[];
  handleSelectHour: (hour: HourlyForecast) => void;
  selectedHourTimestamp: HourlyForecast["timestamp"];
  icon: WeatherIconProps["name"];
}
