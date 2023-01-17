import { PictureSearch } from "./PictureSearch"
import { timeConversion } from "../timeConversion"

import type { DailyInfo } from "../../../models/IWeatherForecastInfo"

class IconSearch extends PictureSearch {
  constructor() { super() }

  public isFileVariableOverTime(fileName: string) {
    const variableIcons = ['clear-sky', 'few-clouds', 'scattered-clouds']
    return variableIcons.includes(fileName)
  }

  public getVariableFolderOverTime(localTimestamp: number, dailyInfo: DailyInfo[]) {
    const [{ localTime: { noon: todayNoon } }] = dailyInfo
    const todayStart = todayNoon - (timeConversion.DAY_IN_SECONDS / 2)
    const hourIndex = Math.floor(
      (localTimestamp - todayStart) / timeConversion.HOUR_IN_SECONDS
    )

    const dayIndex = Math.floor(hourIndex / timeConversion.DAY_IN_HOURS)
    return super.getTimeVariant({
      timestamp: localTimestamp,
      sunrise: dailyInfo[dayIndex].localTime.sunrise,
      sunset: dailyInfo[dayIndex].localTime.sunset
    })
  }
}

export const iconSearch = new IconSearch()
