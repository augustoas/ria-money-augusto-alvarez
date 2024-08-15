<template>
  <div class="hourly-weather-card">
    <p class="card-temperature">{{ formatTemperature(weather.temperature) }}</p>
    <p class="card-humidity">{{ weather.humidity || 'No rain data' }}%</p>
    <v-img class="card-icon" :src="weather.icon" alt="Weather icon"></v-img>
    <p class="card-hour">{{ formatHour(weather.time) }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { formatTemperature, formatHour } from "@/utils/utils";
import type { HourlyWeather } from "../types/types";


const props = defineProps({
  weather: {
    type: Object as () => HourlyWeather,
    required: true,
  },
});

</script>

<style lang="scss" scoped>
.hourly-weather-card{
  min-width: 100px;
  padding: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.card-temperature {
  font-size: 1rem;
  font-weight: bold;
}

.card-humidity {
  font-size: 1rem;
  color: rgb(79, 184, 220);
  font-weight: bold;
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
