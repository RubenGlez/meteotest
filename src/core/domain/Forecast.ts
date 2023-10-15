export type Forecast = DailyForecast[];

export interface DailyForecast {
  timestamp: number;
  hourlyForecast: HourlyForecast[];
}

export interface HourlyForecast {
  timestamp: number;
  icon: string;
  description: string;
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
}
