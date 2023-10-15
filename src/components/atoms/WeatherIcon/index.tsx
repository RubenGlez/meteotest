import { weatherIcons } from "./icons";
import { StyledImg } from "./styled";
import { WeatherIconProps } from "./types";

export default function WeatherIcon({
  name,
  alt = "",
  size = 100,
}: WeatherIconProps) {
  const $size = size > 100 ? 100 : size;
  const src = weatherIcons[name];

  return <StyledImg src={src} alt={alt} $size={$size} />;
}
