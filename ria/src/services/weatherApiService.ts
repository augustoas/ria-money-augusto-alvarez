import { apiClient } from "./weatherApiClient";

import type { WeatherData } from "../types/types";

/**
 * Transforms the raw API response into the desired WeatherData format.
 * 
 * @param response - The raw API response object.
 * @returns A formatted WeatherData object.
 */
const buildWeatherResponse = (response: any): WeatherData => {

  // Extract the first entry as the current weather (assuming the API returns sorted data)
  const currentWeather = response.list[0];

  // Create a map to store the first entry for each day
  const dailyMap: { [key: string]: any } = {};

  // Iterate over the list of weather data
  response.list.forEach((entry: any) => {
    const date = entry.dt_txt.split(' ')[0]; // Extract the date part from the date-time string
    if (!dailyMap[date]) {
      dailyMap[date] = entry; // Store the entry if it's the first for that date
    }
  });

  return {
    current: {
      temperature: currentWeather.main.temp,
      description: currentWeather.weather[0].description,
      icon: `http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`,
    },
    hourly: response.list.map((hour: any) => ({
      time: hour.dt_txt, // Convert date-time string to Unix timestamp
      temperature: hour.main.temp,
      humidity: hour.main.humidity,
      icon: `http://openweathermap.org/img/w/${hour.weather[0].icon}.png`,
    })),
    daily: Object.values(dailyMap).map((day: any) => ({
      date: day.dt_txt.split(' ')[0], // Date part of the date-time string
      temperature: {
        min: day.main.temp_min,
        max: day.main.temp_max,
      },
      description: day.weather[0].description,
      icon: `http://openweathermap.org/img/w/${day.weather[0].icon}.png`,
    })),
  };
};

/**
 * Fetches weather data for a given city and returns it in a formatted structure.
 * 
 * @param city - The name of the city to fetch weather data for.
 * @returns A promise that resolves to a WeatherData object.
 */
export const getWeatherByCityName = async (city: string): Promise<WeatherData> => {
  try {
    // Make an API request to fetch weather data for the specified city
    const response = await apiClient.get("/forecast", {
      params: {
        q: city, // City name
        units: "metric", // Use metric units for temperature
      },
    });

    // Transform and return the formatted weather data
    return buildWeatherResponse(response.data);
  } catch (error) {
    // Log the error
    console.error(`Error fetching weather for ${city}:`, error);
    throw error;
  }
};
