import useDateUtils from "../../../hooks/useDateUtils";
import Typography from "../../atoms/Typography";
import WeatherIcon from "../../atoms/WeatherIcon";
import { WeatherIconProps } from "../../atoms/WeatherIcon/types";
import { parseTemperature } from "../../../helpers";
import {
  WeatherForecastHourlyList,
  WeatherForecastHourlyCard,
  WeatherForecastHourlyContainer,
} from "./styled";
import { WeatherForecastHourlyProps } from "./types";
import { HourlyForecast } from "../../../core/domain/Forecast";
import { useTranslation } from "react-i18next";

export default function WeatherForecastHourly({
  hours = [],
  handleSelectHour,
  selectedHourTimestamp,
}: WeatherForecastHourlyProps) {
  const { t } = useTranslation();
  const { parseTime } = useDateUtils();
  const handleClick = (hour: HourlyForecast) => () => {
    handleSelectHour(hour);
  };
  return (
    <WeatherForecastHourlyContainer>
      <Typography color="secondary" size="s">
        {t("info.time")}
      </Typography>

      <WeatherForecastHourlyList>
        {hours.map((hour) => {
          const { icon, temperature, timestamp, description } = hour;
          const isSelected = timestamp === selectedHourTimestamp;
          return (
            <WeatherForecastHourlyCard
              key={timestamp}
              onClick={handleClick(hour)}
              $isSelected={isSelected}
            >
              <Typography color="secondary" size="s" as="time">
                {parseTime(timestamp)}
              </Typography>
              <WeatherIcon
                name={icon as WeatherIconProps["name"]}
                alt={description}
                size={60}
              />
              <Typography>{parseTemperature(temperature)}</Typography>
            </WeatherForecastHourlyCard>
          );
        })}
      </WeatherForecastHourlyList>
    </WeatherForecastHourlyContainer>
  );
}
