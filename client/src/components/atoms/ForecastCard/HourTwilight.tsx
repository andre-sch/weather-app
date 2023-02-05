import { twilightSearch } from "../../../utils/twilightSearch"
import { textFormat } from "../../../utils/textFormat"

import { ForecastCard } from "../ForecastCard"

import type { HourCardProps } from "./HourCard"

export function HourTwilight(props: HourCardProps) {
  const hourInfo = props.forecastInfo.hourly[props.hourIndex]; const dailyInfo = props.forecastInfo.daily
  const twilightInfo = twilightSearch.existAtTime({ dailyInfo, hourTimestamp: hourInfo.localTimestamp })

  if (!twilightInfo) return null
  else return (
    <ForecastCard
      extraClassName="twilight"
      time={textFormat.clockTime(twilightInfo.timestamp, 'hh:mm')}
      iconPath="both/twilight.svg"
      iconDescription="twilight"
    >
      <strong>{textFormat.capitalize(twilightInfo.type)}</strong>
    </ForecastCard>
  )
}
