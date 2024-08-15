<template>
  <div class="daily-weather-card">
    <v-img class="card-icon" :src="weather.icon" alt="Weather icon"></v-img>
    <div class="card-date-description-col">
      <p class="card-date">{{ formatDate(weather.date) }}</p>
      <p class="card-description">{{ capitalizeFirstLetter(weather.description) }}</p>
    </div>
    <p class="card-temperature">
      {{ formatTemperature(weather.temperature.max) }}
    </p>
    <p class="card-temperature">
      {{ formatTemperature(weather.temperature.min) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { formatTemperature, formatDate, capitalizeFirstLetter } from "@/utils/utils";
import type { DailyWeather } from "../types/types";

const props = defineProps({
  // define type in types
  weather: {
    type: Object as () => DailyWeather,
    required: true,
  },
});

</script>

<style lang="scss" scoped>
.daily-weather-card {
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.card-temperature {
  font-size: 1rem;
  font-weight: bold;
}

.card-date-description-col {
}

.card-icon {
  width: 50px;
  height: 50px;
}

.card-hour {
  font-size: 1rem;
  font-weight: bold;
  color: grey;
}
</style>
