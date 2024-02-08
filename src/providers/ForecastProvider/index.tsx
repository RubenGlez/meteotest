import { useCallback, useEffect, useMemo, useState } from "react";
import { ForecastContext } from "../../contexts/ForecastContext";
import {
  ForecastGetParams,
  ForecastRepository,
} from "../../core/domain/ForecastRepository";
import {
  DailyForecast,
  Forecast,
  HourlyForecast,
} from "../../core/domain/Forecast";
import { getForecastUseCase } from "../../core/application/getForecastUseCase";
import { useTranslation } from "react-i18next";

export default function ForecastProvider({
  children,
  repository,
}: React.PropsWithChildren<{ repository: ForecastRepository }>) {
  const { t } = useTranslation();
  const [forecast, setForecast] = useState<Forecast>([]);
  const [selectedDay, setSelectedDay] = useState<DailyForecast>();
  const [selectedHour, setSelectedHour] = useState<HourlyForecast>();
  const [error, setError] = useState<string>();

  const forecastService = getForecastUseCase(repository);

  const getWeatherForecast = useCallback(
    async (params: ForecastGetParams) => {
      try {
        const fc = await forecastService(params);
        setForecast(fc);
      } catch (e) {
        setError(t("error"));
      }
    },
    [forecastService, t]
  );

  function handleSelectDay(day: DailyForecast) {
    setSelectedDay(day);
  }

  function handleSelectHour(hour: HourlyForecast) {
    setSelectedHour(hour);
  }

  // Reset selected day when we receive a new forecast
  useEffect(() => {
    const firstDay = forecast[0];
    if (firstDay) {
      setSelectedDay(firstDay);
    }
  }, [forecast]);

  // Reset selected hour when we change the selected day
  useEffect(() => {
    const firstHour = selectedDay?.hourlyForecast[0];
    if (firstHour) {
      setSelectedHour(firstHour);
    }
  }, [selectedDay]);

  const value = useMemo(
    () => ({
      getForecast: getWeatherForecast,
      handleSelectDay,
      handleSelectHour,
      days: forecast,
      hours: selectedDay?.hourlyForecast,
      selectedDayTimestamp: selectedDay?.timestamp,
      selectedHourTimestamp: selectedHour?.timestamp,
      currentTemperature: selectedHour?.temperature,
      currentDescription: selectedHour?.description,
      currentMaxTemperature: selectedHour?.maxTemperature,
      currentMinTemperature: selectedHour?.minTemperature,
      currentIcon: selectedHour?.icon,
      error,
    }),
    [
      error,
      forecast,
      getWeatherForecast,
      selectedDay?.hourlyForecast,
      selectedDay?.timestamp,
      selectedHour?.description,
      selectedHour?.icon,
      selectedHour?.maxTemperature,
      selectedHour?.minTemperature,
      selectedHour?.temperature,
      selectedHour?.timestamp,
    ]
  );

  return (
    <ForecastContext.Provider value={value}>
      {children}
    </ForecastContext.Provider>
  );
}
