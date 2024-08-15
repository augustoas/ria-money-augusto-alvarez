export interface CurrentWeather {
  temperature: number;
  description: string;
  icon: string;
}

export interface HourlyWeather {
  temperature: number;
  humidity: number;
  icon: string;
  time: string;
}

export interface DailyWeather {
  icon: string;
  date: string; // Date in ISO 8601 format
  description: string;
  temperature: {
    min: number;
    max: number;
  };
}

export interface WeatherData {
  current: CurrentWeather;
  hourly: HourlyWeather[];
  daily: DailyWeather[];
}
