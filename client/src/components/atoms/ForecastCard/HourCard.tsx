import { twilightSearch } from "../../../utils/twilightSearch"
import { textFormat } from "../../../utils/textFormat"

import { ForecastCard } from "../ForecastCard"
import { HourTwilight } from "./HourTwilight"

import type { IWeatherForecastInfo } from "../../../services/weatherService/data/IWeatherForecastInfo"

export interface HourCardProps { forecastInfo: IWeatherForecastInfo, hourIndex: number }

export function HourCard({ forecastInfo, hourIndex }: HourCardProps) {
  const hourInfo = forecastInfo.hourly[hourIndex]; const dailyInfo = forecastInfo.daily
  const twilightInfo = twilightSearch.existAtTime({ dailyInfo, hourTimestamp: hourInfo.localTimestamp })

  return (
    <>
      <ForecastCard
        time={hourIndex == 0 ? 'Now' : textFormat.clockTime(hourInfo.localTimestamp, 'hh:00')}
        iconPath={hourInfo.condition.iconPath}
        iconDescription={hourInfo.condition.description}
      >
        <strong>{hourInfo.temperature + 'º'}</strong>
      </ForecastCard>

      {twilightInfo && (
        <HourTwilight forecastInfo={forecastInfo} hourIndex={hourIndex} />
      )}
    </>
  )
}
