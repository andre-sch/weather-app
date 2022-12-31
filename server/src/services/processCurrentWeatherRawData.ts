import { getWindDirection } from "./utils/getWindDirection"
import { imageSearch } from "./utils/fileSearch/ImageSearch"

import type { ICurrentWeatherInfo } from "../models/ICurrentWeatherInfo"
import type { ICurrentWeatherRawData } from "../externals/weatherAPI/data/ICurrentWeatherRawData"

export function processCurrentWeatherRawData(
  rawData: ICurrentWeatherRawData
): ICurrentWeatherInfo {
  const convertToLocalTime = (globalTime: number) => globalTime + rawData.timezone

  const [{ id: weatherID, description: weatherDescription }] = rawData.weather
  const timeParams = {
    timestamp: rawData.dt,
    sunrise: rawData.sys.sunrise,
    sunset: rawData.sys.sunset
  }

  return {
    coordinates: {
      latitude: rawData.coord.lat,
      longitude: rawData.coord.lon
    },
    condition: {
      description: weatherDescription,
      imgPath: (
        imageSearch.getFolder(timeParams) + '/' +
        imageSearch.getFileName(weatherID) + '.png'
      )
    },
    localTime: {
      sunrise: convertToLocalTime(rawData.sys.sunrise),
      sunset: convertToLocalTime(rawData.sys.sunset)
    },
    temperature: Math.round(rawData.main.temp),
    feelsLike: Math.round(rawData.main.feels_like),
    wind: {
      speed: rawData.wind.speed,
      direction: getWindDirection(rawData.wind.deg)
    },
    humidity: rawData.main.humidity,
    visibility: rawData.visibility,
  }
}
