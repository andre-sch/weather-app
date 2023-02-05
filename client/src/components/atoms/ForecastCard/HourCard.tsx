import { textFormat } from "../../../utils/textFormat"
import { ForecastCard } from "../ForecastCard"

import type { HourlyInfo } from "../../../services/weatherService/data/IWeatherForecastInfo"

interface HourCardProps { hourInfo: HourlyInfo, isCurrentTime: boolean }

export function HourCard({ hourInfo, isCurrentTime }: HourCardProps) {
  return (
    <ForecastCard
      time={isCurrentTime ? 'Now' : textFormat.clockTime(hourInfo.localTimestamp, 'hh:00')}
      iconPath={hourInfo.condition.iconPath}
      iconDescription={hourInfo.condition.description}
    >
      <strong>{hourInfo.temperature + 'º'}</strong>
    </ForecastCard>
  )
}
