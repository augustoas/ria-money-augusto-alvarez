<template>
  <div>
    <BaseTabs :tabs="cities" @selectCity="fetchWeather" />
    <div class="home-view" v-if="weather">
      <div class="weather-container">
        <h1>Next hours</h1>
        <div class="hourly-weather-cards-container">
          <HourlyWeatherCard
            v-for="hourlyWeather in weather.hourly"
            :key="hourlyWeather.time"
            :weather="hourlyWeather"
          />
        </div>
      </div>
      <div class="weather-container">
        <h1>Next days</h1>
        <div class="daily-weather-cards-container">
          <DailyWeatherCard
            v-for="dailyWeather in weather.daily"
            :key="dailyWeather.time"
            :weather="dailyWeather"
          />
        </div>
      </div>
      <div class="button-container">
        <p>Last time updated: {{ lastRefreshTime }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useWeatherStore } from "@/stores/weatherStore";
import BaseTabs from "@/components/base/BaseTabs.vue";
import HourlyWeatherCard from "@/components/HourlyWeatherCard.vue";
import DailyWeatherCard from "@/components/DailyWeatherCard.vue";

const cities = ["Rio de Janeiro", "Beijing", "Los Angeles"];
const selectedCity = ref(cities[0]);
const lastRefreshTime = ref(new Date().toLocaleString());

const weatherStore = useWeatherStore();

const fetchWeather = async (city: string) => {
  await weatherStore.fetchWeather(city);
  selectedCity.value = city; // Update selected city upon successful fetch
  lastRefreshTime.value = new Date().toLocaleString();
};

const weather = computed(() => weatherStore.weatherData[selectedCity.value]);

onMounted(() => {
  console.log("Home view mounted");
  fetchWeather(selectedCity.value); // Fetch weather data for the initial city on mount
});
</script>

<style lang="scss" scoped>
h1 {
  font-size: 24px;
  margin: 20px;
}

.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.weather-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 20px 0px;
  background-color: white;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
}

.hourly-weather-cards-container {
  display: flex;
  gap: 10px;
  overflow-x: scroll;
  max-width: 100%;
  align-self: center;
}

.hourly-weather-cards-container > div:not(:last-child) {
  border-right: 1px solid #e0dcdc; /* Adjust color and size as needed */
}

.daily-weather-cards-container {
  display: flex;
  gap: 2px;
  overflow-x: scroll;
  max-width: 85%;
  align-self: center;
  flex-direction: column;
}

.daily-weather-cards-container > div:not(:last-child) {
  border-bottom: 1px solid #e0dcdc; /* Adjust color and size as needed */
}

.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  gap: 20px;
}
</style>
