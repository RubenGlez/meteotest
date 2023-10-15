import { WeatherForecastContainer } from "./styled";

import WeatherForecastDaily from "../WeatherForecastDaily";
import WeatherForecastWeekely from "../WeatherForecastWeekely";
import { WeatherForecastProps } from "./types";
import useForecastContext from "../../../hooks/useForecastContext";
import { useEffect } from "react";
import i18n from "../../../services/i18n";
import { WeatherIconProps } from "../../atoms/WeatherIcon/types";
import Alert from "../../molecules/Alert";

const appid = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

export default function WeatherForecast({ city }: WeatherForecastProps) {
  const lang = i18n.language;
  const {
    days,
    hours,
    getForecast,
    handleSelectDay,
    selectedDayTimestamp,
    handleSelectHour,
    selectedHourTimestamp,
    currentDescription,
    currentMaxTemperature,
    currentMinTemperature,
    currentTemperature,
    currentIcon,
    error,
  } = useForecastContext();

  const showForecastDaily =
    currentTemperature &&
    currentDescription &&
    currentMinTemperature &&
    currentMaxTemperature &&
    hours &&
    hours.length > 0 &&
    selectedHourTimestamp;

  const showForecastWeekely = days && days.length > 0 && selectedDayTimestamp;

  useEffect(() => {
    getForecast({ appid, city, lang });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city, lang]);

  return (
    <WeatherForecastContainer>
      {showForecastDaily && (
        <WeatherForecastDaily
          temperature={currentTemperature}
          description={currentDescription}
          minTemperature={currentMinTemperature}
          maxTemperature={currentMaxTemperature}
          icon={currentIcon as WeatherIconProps["name"]}
          hours={hours}
          handleSelectHour={handleSelectHour}
          selectedHourTimestamp={selectedHourTimestamp}
        />
      )}
      {showForecastWeekely && (
        <WeatherForecastWeekely
          days={days}
          handleSelectDay={handleSelectDay}
          selectedDayTimestamp={selectedDayTimestamp}
        />
      )}
      {error && <Alert text={error} />}
    </WeatherForecastContainer>
  );
}
