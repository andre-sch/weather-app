import { timeConversion } from './timeConversion'
import type { IWeatherForecastInfo, DailyInfo } from '../services/weatherService/data/IWeatherForecastInfo'

interface HourProps {
  forecastInfo: IWeatherForecastInfo,
  hourIndex: number
}

interface TwilightInfo {
  type: 'sunrise' | 'sunset',
  timestamp: number
}

class Twilight {
  public existAtTime(props: HourProps) {
    const hourInfo = props.forecastInfo.hourly[props.hourIndex]
    const nextTwilights = this.mapTheNext(...props.forecastInfo.daily)

    return nextTwilights.find(twilight => {
      const changeInTime = twilight.timestamp - hourInfo.localTimestamp
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

export const twilight = new Twilight()
