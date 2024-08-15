# Ria Money Application - Augusto Alvarez

First of all, thank you, Ria, for the opportunity. In this README file, I'll explain my thought process. To be honest, I took a bit more time than the suggested 2 hours (approximately 3.5 hours) to complete what I did. This decision was made to ensure quality over rushing to complete more. I got slightly stuck dealing with timezones, and I'm currently recovering from an arm injury, so I'm working with one hand most of the time, but I expect to be fully recovered soon. I hope this small assessment reflects my dedication to Vue throughout my career. I am proficient in both Vue 2 and Vue 3, but I chose Vue 3 for this task.

# .env

As a best practice, it's always better to keep keys and secrets in a .env file. You will need to create a .env file and place the API key as follows:

VITE_WEATHER_API_KEY='API KEY'

# Steps

# Project Setup

I created the repository and set up the Vue project using Vite. I spent time understanding the API and planning the project structure. The project was created with TypeScript, Vue Router, Vuetify, Pinia, and Axios for API calls.

# Folder Structure and Modularization:

/assets: Contains main CSS files and logos/images if needed (not needed in this case).
/components: Holds the application components.
/base: Contains base components reused throughout the project.
/navigation: Contains all components related to navigation.
/router: Created by default in Vite; used to handle routing.
/services: Contains the ApiClient and ApiService, which is an important separation of concerns.
/stores: Contains weatherStore for state management.
/types: Created to handle different types needed for the project.
/views: Contains the application views.

# API Services

The weatherApiClient and weatherApiService are explained and commented on in the code. I intended to replace the 'any' type with the expected API response type but left it as is due to time constraints.

Additionally, I created the getWeatherByCityName service to handle the API calls. The input is transformed using buildWeatherResponse to provide the output that fits our case.

# Store

I created the weatherStore, which is used to store the weather data for the cities to avoid making API calls when switching tabs, optimizing the performance. Only when refreshing the browser do we collect the information from the API. You can observe the effect when switching tabs.

# Components

In HourlyWeatherCards, I didn't handle the next or upcoming dates due to time constraints, but I managed to show only the upcoming hours. I know I should filter by hour using the current time in the city, and I intended to do this using dayjs, but I didn’t have enough time.

# Vuetify

I used Vuetify for the tabs component.

# Styles

I applied some styles following the mockups, primarily using Flexbox to handle responsiveness.

# Bonus

I did not have enough time to implement the Bonus features, but the API service is already set up, so adding this functionality wouldn’t be too difficult.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
