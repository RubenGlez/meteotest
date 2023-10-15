import { DailyForecast } from "../core/domain/Forecast";
import i18n from "../services/i18n";

export function getMinAndMaxTemperatures(
  hourlyForecast: DailyForecast["hourlyForecast"]
) {
  const temperatures: number[] = hourlyForecast.map((hour) => hour.temperature);
  const minTemperature = Math.min(...temperatures);
  const maxTemperature = Math.max(...temperatures);
  return { minTemperature, maxTemperature };
}

export function parseTemperature(celsiusTemperature: number) {
  const lang = i18n.language;
  const temperature =
    lang === "es" ? celsiusTemperature : (celsiusTemperature * 9) / 5 + 32;
  return `${Math.round(temperature)}${lang === "es" ? " ºC" : " ºF"}`;
}
