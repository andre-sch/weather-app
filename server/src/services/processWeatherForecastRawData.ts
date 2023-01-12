import { iconSearch } from "./utils/fileSearch/IconSearch"
import { timeConversion } from "./utils/timeConversion"

import type { IWeatherForecastInfo } from "../models/IWeatherForecastInfo"
import type { IWeatherForecastRawData, hourlyRawData, dailyRawData } from "../externals/weatherAPI/data/IWeatherForecastRawData"

export function processWeatherForecastRawData(
  rawData: IWeatherForecastRawData
): IWeatherForecastInfo {
  const convertToLocalTime = (globalTime: number) => globalTime + rawData.timezone_offset
  const rainAmount = { lastHour: 0, next24h: 0 }

  const dailyInfo = rawData.daily.map((dayRawData: dailyRawData) => {
    const [{ id: weatherID, description: weatherDescription }] = dayRawData.weather
    const iconFileName = iconSearch.getFileName(weatherID)
    const iconFolder = iconSearch.isFileVariableOverTime(iconFileName) ? 'day' : 'both'

    return {
      condition: {
        description: weatherDescription,
        iconPath: `${iconFolder}/${iconFileName}.svg`
      },
      localTime: {
        noon: convertToLocalTime(dayRawData.dt),
        sunrise: convertToLocalTime(dayRawData.sunrise),
        sunset: convertToLocalTime(dayRawData.sunset)
      },
      temperature: {
        min: Math.round(dayRawData.temp.min),
        max: Math.round(dayRawData.temp.max)
      }
    }
  })
  const hourlyInfo = rawData.hourly.map((hourRawData: hourlyRawData, hourIndex) => {
    const localTimestamp = convertToLocalTime(hourRawData.dt)

    if (hourRawData.rain && hourIndex < timeConversion.DAY_IN_HOURS) {
      if (hourIndex == 0) rainAmount.lastHour = hourRawData.rain['1h']
      rainAmount.next24h += hourRawData.rain['1h']
    }

    const [{ id: weatherID, description: weatherDescription }] = hourRawData.weather
    const iconFileName = iconSearch.getFileName(weatherID)

    const iconFolder = iconSearch.isFileVariableOverTime(iconFileName) ? (
      iconSearch.getVariableFolderOverTime(localTimestamp, dailyInfo)
    ) : 'both'

    return {
      condition: {
        description: weatherDescription,
        iconPath: `${iconFolder}/${iconFileName}.svg`
      },
      localTimestamp,
      temperature: Math.round(hourRawData.temp)
    }
  })

  return {
    coordinates: {
      latitude: rawData.lat,
      longitude: rawData.lon
    },
    rainAmount,
    hourly: hourlyInfo,
    daily: dailyInfo
  }
}
