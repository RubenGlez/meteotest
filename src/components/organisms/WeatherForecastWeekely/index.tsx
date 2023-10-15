import { DailyForecast } from "../../../core/domain/Forecast";
import useDateUtils from "../../../hooks/useDateUtils";
import Typography from "../../atoms/Typography";
import { getMinAndMaxTemperatures, parseTemperature } from "../../../helpers";
import {
  WeatherForecastWeekelyCard,
  WeatherForecastWeekelyCardTemps,
  WeatherForecastWeekelyList,
  WeatherForecastWeekelyContainer,
} from "./styled";
import { WeatherForecastWeekelyProps } from "./types";
import { useTranslation } from "react-i18next";

export default function WeatherForecastWeekely({
  days = [],
  handleSelectDay,
  selectedDayTimestamp,
}: WeatherForecastWeekelyProps) {
  const { t } = useTranslation();
  const { getDayOfTheWeek } = useDateUtils();

  const handleClick = (day: DailyForecast) => () => {
    handleSelectDay(day);
  };

  return (
    <WeatherForecastWeekelyContainer>
      <Typography size="s" color="secondary">
        {t("info.day")}
      </Typography>
      <WeatherForecastWeekelyList>
        {days.map((day) => {
          const { timestamp, hourlyForecast } = day;
          const { maxTemperature, minTemperature } =
            getMinAndMaxTemperatures(hourlyForecast);
          const isSelected = selectedDayTimestamp === timestamp;

          return (
            <WeatherForecastWeekelyCard
              key={timestamp}
              onClick={handleClick(day)}
              $isSelected={isSelected}
            >
              <Typography
                size="s"
                transform="uppercase"
                color="secondary"
                as="time"
              >
                {getDayOfTheWeek(timestamp)}
              </Typography>
              <WeatherForecastWeekelyCardTemps>
                <Typography>{parseTemperature(maxTemperature)}</Typography>
                <Typography size="s">
                  {parseTemperature(minTemperature)}
                </Typography>
              </WeatherForecastWeekelyCardTemps>
            </WeatherForecastWeekelyCard>
          );
        })}
      </WeatherForecastWeekelyList>
    </WeatherForecastWeekelyContainer>
  );
}
