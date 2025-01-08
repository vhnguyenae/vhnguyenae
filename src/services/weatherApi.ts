import { WeatherData } from '../types/weather';

// Mock data that matches the format of the WeatherData interface
const mockWeatherData: WeatherData = {
  location: "Nha Trang, VN",
  temperature: 27,
  feelsLike: 29,
  humidity: 76,
  windSpeed: 5.6,
  windDirection: "NE",
  pressure: 1011,
  description: "Broken clouds",
  visibility: 10.0,
  uvIndex: 2,
  hourlyForecast: [
    { time: "2pm", temperature: 30, description: "broken clouds", windSpeed: 5.3 },
    { time: "3pm", temperature: 29, description: "broken clouds", windSpeed: 5.6 },
    { time: "4pm", temperature: 28, description: "broken clouds", windSpeed: 5.2 },
    { time: "5pm", temperature: 27, description: "broken clouds", windSpeed: 4.7 },
    { time: "6pm", temperature: 26, description: "broken clouds", windSpeed: 4.4 },
    { time: "7pm", temperature: 25, description: "broken clouds", windSpeed: 4.4 },
    { time: "8pm", temperature: 24, description: "scattered clouds", windSpeed: 3.7 },
    { time: "9pm", temperature: 23, description: "scattered clouds", windSpeed: 3.4 },
    { time: "10pm", temperature: 22, description: "scattered clouds", windSpeed: 3.3 }
  ],
  dailyForecast: [
    { date: "Tue", highTemp: 27, lowTemp: 20, description: "sunny", weatherIcon: "sunny" },
    { date: "Wed", highTemp: 26, lowTemp: 19, description: "scattered clouds", weatherIcon: "cloudy" },
    { date: "Thu", highTemp: 25, lowTemp: 19, description: "overcast clouds", weatherIcon: "cloudy" },
    { date: "Fri", highTemp: 24, lowTemp: 21, description: "light rain", weatherIcon: "rain" },
    { date: "Sat", highTemp: 25, lowTemp: 21, description: "light rain", weatherIcon: "rain" },
    { date: "Sun", highTemp: 22, lowTemp: 19, description: "light rain", weatherIcon: "rain" },
    { date: "Mon", highTemp: 22, lowTemp: 19, description: "light rain", weatherIcon: "rain" },
    { date: "Tue", highTemp: 23, lowTemp: 20, description: "moderate rain", weatherIcon: "rain" }
  ]
};

export const getWeatherData = async (location: string): Promise<WeatherData> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Return mock data with the searched location
  return {
    ...mockWeatherData,
    location: location // Use the searched location instead of hardcoded one
  };
}; 