# Weather App

> Production version of this project is [deployed in vercel](https://andresch-weather-client.vercel.app/)  

Provides an interface that displays weather data for cities around the world.  
Allowing the user to register or delete cities as needed.  

Includes both `hourly` and `daily` forecasts, which are fetched from an external API.  

> [![Check Figma Design](https://github.com/andre-sch/weather-app/blob/master/client/public/assets/other/figma.svg)](https://www.figma.com/community/file/1242489040257376533)

[![TypeScript](https://img.shields.io/badge/typescript-1B1B1B?style=for-the-badge&logo=typescript&logoColor=F0EED0)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/react-1B1B1B?style=for-the-badge&logo=react&logoColor=F0EED0)](https://react.dev/)
[![Axios](https://img.shields.io/badge/axios-1B1B1B?style=for-the-badge&logo=axios&logoColor=F0EED0)](https://axios-http.com/)
[![Express](https://img.shields.io/badge/express-1B1B1B?style=for-the-badge&logo=express&logoColor=F0EED0)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/vite-1B1B1B?style=for-the-badge&logo=vite&logoColor=F0EED0)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/vercel-1B1B1B?style=for-the-badge&logo=vercel&logoColor=F0EED0)](https://vercel.com/)

## :dart: Goals

* Implement React advanced features
  * `Context` `Memoization` `Refs`
* Consume external APIs
  * [OpenWeather](https://openweathermap.org/) — weather provider
  * [Geoapify](https://www.geoapify.com/) — location autocomplete

## :toolbox: Setup

### Prerequisites

* Download [npm](https://nodejs.org/) and [git](https://git-scm.com/downloads)
* Get your external API keys:
  [`WEATHER_API`](https://openweathermap.org/api/one-call-3) and
  [`LOCATION_API`](https://myprojects.geoapify.com/)

### Installation

* Clone repository

```sh
git clone git@github.com:andre-sch/weather-app.git 
```

* Install `client` and `server` packages

```sh
npm install
```

### Environment Variables

* Copy `server/` `.env.example` to `.env` and  
* Replace env variables with your generated keys

```env
EXTERNAL_WEATHER_API_KEY="YOUR_GENERATED_KEY"
EXTERNAL_LOCATION_API_KEY="YOUR_GENERATED_KEY"
```

### Run Locally

* Run `client` and `server` in development mode

```sh
npm run dev
```
