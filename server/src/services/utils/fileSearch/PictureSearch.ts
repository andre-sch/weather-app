import { weatherIdIntervalsByFileNames } from "../../../externals/weatherAPI/data/weatherIdIntervalsByCondition"
import { defaultFileName, type pictureFileNames } from "../../../models/pictureFileNames"

export interface timeParams { timestamp: number, sunrise: number, sunset: number }

export class PictureSearch {
  public getFileName(weatherID: number) {
    for (const fileName in weatherIdIntervalsByFileNames) {
      const interval = weatherIdIntervalsByFileNames[fileName as pictureFileNames]
      const [minValue, maxValue] = interval

      if (minValue <= weatherID && weatherID <= maxValue) return fileName
    }
    return defaultFileName
  }

  protected getTimeVariant({ timestamp, sunrise, sunset }: timeParams) {
    if (timestamp < sunrise || timestamp > sunset) return 'night'
    else return 'day'
  }
}
