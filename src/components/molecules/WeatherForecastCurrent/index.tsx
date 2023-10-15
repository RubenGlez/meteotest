import useDateUtils from "../../../hooks/useDateUtils";
import Typography from "../../atoms/Typography";
import WeatherIcon from "../../atoms/WeatherIcon";
import { parseTemperature } from "../../../helpers";
import {
  WeatherForecastCurrentCard,
  WeatherForecastCurrentColumn,
  WeatherForecastCurrentTemperature,
} from "./styled";
import { WeatherForecastCurrentProps } from "./types";

export default function WeatherForecastCurrent({
  temperature,
  description,
  minTemperature,
  maxTemperature,
  icon,
  timestamp,
}: WeatherForecastCurrentProps) {
  const { parseFullDate } = useDateUtils();

  return (
    <WeatherForecastCurrentCard role="region">
      <WeatherForecastCurrentColumn>
        <WeatherForecastCurrentTemperature>
          <Typography as="time" size="s" color="secondary" weight="thin">
            {parseFullDate(timestamp)}
          </Typography>
          <div>
            <Typography>{parseTemperature(temperature)}</Typography>
            <Typography as="p" transform="capitalize">
              {description}
            </Typography>
          </div>
        </WeatherForecastCurrentTemperature>
        <Typography as="p" color="secondary" size="s">
          {`${parseTemperature(maxTemperature)} / ${parseTemperature(
            minTemperature
          )}`}
        </Typography>
      </WeatherForecastCurrentColumn>

      <WeatherForecastCurrentColumn>
        <WeatherIcon name={icon} alt={description} />
      </WeatherForecastCurrentColumn>
    </WeatherForecastCurrentCard>
  );
}
