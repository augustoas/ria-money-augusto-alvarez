import { defineStore } from 'pinia';
import { ref } from 'vue';
import { getWeatherByCityName } from '@/services/weatherApiService';

export const useWeatherStore = defineStore('weather', () => {
  const weatherData = ref<{ [city: string]: any }>({});

  const fetchWeather = async (city: string) => {
    if (!weatherData.value[city]) {
      try {
        const data = await getWeatherByCityName(city);
        weatherData.value[city] = data;
      } catch (error) {
        console.error(`Error fetching weather for ${city}:`, error);
      }
    }
    return weatherData.value[city];
  };

  return { weatherData, fetchWeather };
});
