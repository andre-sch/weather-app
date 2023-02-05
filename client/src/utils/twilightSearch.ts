import { timeConversion } from './timeConversion'
import type { DailyInfo } from '../services/weatherService/data/IWeatherForecastInfo'

export interface TwilightInfo { type: 'sunrise' | 'sunset', timestamp: number }

class TwilightSearch {
  public existAtTime(props: { dailyInfo: DailyInfo[], hourTimestamp: number }) {
    const nextTwilights = this.mapTheNext(...props.dailyInfo)

    return nextTwilights.find(twilight => {
      const changeInTime = twilight.timestamp - props.hourTimestamp
      return (0 <= changeInTime && changeInTime <= timeConversion.HOUR_IN_SECONDS)
    })
  }

  public mapTheNext(...days: DailyInfo[]) {
    const twilightTypes = ['sunrise', 'sunset'] as const
    const nextTwilights: TwilightInfo[] = []

    days.forEach(day => twilightTypes.forEach(twilightType => {
      nextTwilights.push({
        type: twilightType,
        timestamp: day.localTime[twilightType]
      })
    }))
    return nextTwilights
  }
}

export const twilightSearch = new TwilightSearch()
