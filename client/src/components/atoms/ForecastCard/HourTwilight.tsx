import { textFormat } from "../../../utils/textFormat"
import { ForecastCard } from "../ForecastCard"

import type { TwilightInfo } from "../../../utils/twilightSearch"

export function HourTwilight(props: { twilightInfo: TwilightInfo }) {
  return (
    <ForecastCard
      extraClassName="hour-twilight"
      time={textFormat.clockTime(props.twilightInfo.timestamp, 'hh:mm')}
      iconPath="both/twilight.svg"
      iconDescription="twilight"
    >
      <strong>{textFormat.capitalize(props.twilightInfo.type)}</strong>
    </ForecastCard>
  )
}
