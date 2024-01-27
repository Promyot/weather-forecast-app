// WeatherCard.js
import React from 'react';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherInfo, wind } = weather;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>Temperature: {main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Weather: {weatherInfo[0].description}</p>
    </div>
  );
};

export default WeatherCard;
