export interface WeatherData {
  location: string;
  temperature: number;
  feelsLike: number;
  humidity: number;
  windSpeed: number;
  windDirection: string;
  pressure: number;
  description: string;
  visibility: number;
  uvIndex: number;
  hourlyForecast: HourlyForecast[];
  dailyForecast: DailyForecast[];
}

interface HourlyForecast {
  time: string;
  temperature: number;
  description: string;
  windSpeed: number;
}

interface DailyForecast {
  date: string;
  highTemp: number;
  lowTemp: number;
  description: string;
  weatherIcon?: string;
} 