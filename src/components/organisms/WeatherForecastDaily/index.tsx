import { WeatherForecastDailyCard } from "./styled";
import WeatherForecastCurrent from "../../molecules/WeatherForecastCurrent";
import WeatherForecastHourly from "../../molecules/WeatherForecastHourly";
import { WeatherForecastDailyProps } from "./types";

export default function WeatherForecastDaily({
  temperature,
  description,
  minTemperature,
  maxTemperature,
  hours,
  handleSelectHour,
  selectedHourTimestamp,
  icon,
}: WeatherForecastDailyProps) {
  return (
    <WeatherForecastDailyCard>
      <WeatherForecastCurrent
        temperature={temperature}
        description={description}
        minTemperature={minTemperature}
        maxTemperature={maxTemperature}
        timestamp={selectedHourTimestamp}
        icon={icon}
      />
      <WeatherForecastHourly
        hours={hours}
        handleSelectHour={handleSelectHour}
        selectedHourTimestamp={selectedHourTimestamp}
      />
    </WeatherForecastDailyCard>
  );
}
