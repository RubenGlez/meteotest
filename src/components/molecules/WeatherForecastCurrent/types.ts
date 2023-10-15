import { WeatherIconProps } from "../../atoms/WeatherIcon/types";

export interface WeatherForecastCurrentProps {
  temperature: number;
  description: string;
  minTemperature: number;
  maxTemperature: number;
  icon: WeatherIconProps["name"];
  timestamp: number;
}
