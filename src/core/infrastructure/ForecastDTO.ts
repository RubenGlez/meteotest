import { DailyForecast, Forecast } from "../domain/Forecast";

interface ForecastListApiData {
  dt: number;
  main: {
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

interface ForecastApiData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastListApiData[];
}

export function createForecastDTO({ list = [] }: ForecastApiData) {
  const forecastMap = new Map<string, DailyForecast>();

  list.forEach(({ dt, weather, main }) => {
    const timestamp = dt * 1000;
    const date = new Date(timestamp);
    const dayKey = date.toISOString().split("T")[0];

    if (!forecastMap.has(dayKey)) {
      forecastMap.set(dayKey, {
        timestamp,
        hourlyForecast: [],
      });
    }

    forecastMap.get(dayKey)?.hourlyForecast.push({
      timestamp,
      description: weather[0].description,
      icon: weather[0].icon,
      maxTemperature: main.temp_max,
      minTemperature: main.temp_min,
      temperature: main.temp,
    });
  });

  const forecast: Forecast = Array.from(forecastMap.values());

  return forecast;
}
