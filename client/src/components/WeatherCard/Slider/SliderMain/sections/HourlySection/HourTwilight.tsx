import { twilight } from "../../../../../../utils/twilight"
import { textFormat } from "../../../../../../utils/textFormat"

import { ForecastCard } from "../ForecastCard"

import type { HourCardProps } from "./HourCard"

export function HourTwilight(props: HourCardProps) {
  const twilightInfo = twilight.existAtTime(props)

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
