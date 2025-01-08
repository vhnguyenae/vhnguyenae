import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import LightModeIcon from '@mui/icons-material/LightMode';
import { WeatherData } from '../types/weather';

interface Props {
  weatherData: WeatherData;
}

const getWeatherIcon = (description: string) => {
  if (description.includes('rain')) {
    return <UmbrellaIcon sx={{ fontSize: 40, color: '#6B7280' }} />;
  } else if (description.includes('cloud')) {
    return <CloudIcon sx={{ fontSize: 40, color: '#6B7280' }} />;
  } else if (description.includes('sunny')) {
    return <LightModeIcon sx={{ fontSize: 40, color: '#FFB800' }} />;
  }
  return <WbSunnyIcon sx={{ fontSize: 40, color: '#F59E0B' }} />;
};

export const WeatherDisplay: React.FC<Props> = ({ weatherData }) => {
  const hourlyData = weatherData.hourlyForecast.map(hour => ({
    time: hour.time,
    temperature: hour.temperature,
  }));

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, bgcolor: '#F8FAFC' }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ color: '#1F2937', mb: 1 }}>
          {weatherData.location}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {getWeatherIcon(weatherData.description)}
          <Typography variant="h2" sx={{ color: '#1F2937', fontWeight: 500 }}>
            {weatherData.temperature}°C
          </Typography>
        </Box>
        <Typography variant="subtitle1" sx={{ color: '#4B5563' }}>
          Feels like {weatherData.feelsLike}°C. {weatherData.description}
        </Typography>
      </Box>

      {/* Current Conditions Grid */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 2, bgcolor: '#FFFFFF', borderRadius: 1 }}>
            <Typography sx={{ color: '#6B7280', mb: 1 }}>
              Wind: {weatherData.windSpeed}m/s {weatherData.windDirection}
            </Typography>
            <Typography sx={{ color: '#6B7280', mb: 1 }}>
              Humidity: {weatherData.humidity}%
            </Typography>
            <Typography sx={{ color: '#6B7280' }}>
              Pressure: {weatherData.pressure}hPa
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ p: 2, bgcolor: '#FFFFFF', borderRadius: 1 }}>
            <Typography sx={{ color: '#6B7280', mb: 1 }}>
              UV Index: {weatherData.uvIndex}
            </Typography>
            <Typography sx={{ color: '#6B7280', mb: 1 }}>
              Dew point: 22°C
            </Typography>
            <Typography sx={{ color: '#6B7280' }}>
              Visibility: {weatherData.visibility}km
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Hourly Forecast Graph */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ mb: 2, color: '#1F2937' }}>
          Hourly forecast
        </Typography>
        <Box sx={{ height: 200, width: '100%' }}>
          <ResponsiveContainer>
            <LineChart data={hourlyData}>
              <XAxis 
                dataKey="time" 
                stroke="#6B7280"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                stroke="#6B7280"
                tick={{ fontSize: 12 }}
                domain={['dataMin - 2', 'dataMax + 2']}
              />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#F59E0B"
                strokeWidth={2}
                dot={{ fill: '#F59E0B' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </Box>

      {/* 8-Day Forecast */}
      <Box>
        <Typography variant="h6" sx={{ mb: 2, color: '#1F2937' }}>
          8-Day Forecast
        </Typography>
        <Box sx={{ bgcolor: '#FFFFFF', borderRadius: 1, overflow: 'hidden' }}>
          {weatherData.dailyForecast.map((day, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                borderBottom: index < weatherData.dailyForecast.length - 1 ? '1px solid #E5E7EB' : 'none',
              }}
            >
              <Typography sx={{ color: '#4B5563', width: '30%' }}>{day.date}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '20%' }}>
                {getWeatherIcon(day.description)}
              </Box>
              <Typography sx={{ color: '#4B5563', width: '30%' }}>
                {day.highTemp}°/{day.lowTemp}°C
              </Typography>
              <Typography sx={{ color: '#6B7280', width: '20%', fontSize: '0.875rem' }}>
                {day.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}; 