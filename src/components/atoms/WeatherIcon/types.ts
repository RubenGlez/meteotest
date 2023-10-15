import { weatherIcons } from "./icons";

export interface WeatherIconProps {
  name: keyof typeof weatherIcons;
  alt: string;
  size?: number;
}
