import { timeConversion } from "../../../utils/timeConversion"
import { ForecastCard } from "../ForecastCard"

import type { DailyInfo } from "../../../services/weatherService/data/IWeatherForecastInfo"

interface DayCardProps { dayInfo: DailyInfo, isCurrentDay: boolean }

export function DayCard({ dayInfo, isCurrentDay }: DayCardProps) {
  const dayAbbreviation = timeConversion.getWeekday(dayInfo.localTime.sunrise)

  return (
    <ForecastCard
      extraClassName="day"
      time={isCurrentDay ? 'Today' : dayAbbreviation}
      iconPath={dayInfo.condition.iconPath}
      iconDescription={dayInfo.condition.description}
    >
      <div className="min-max">
        <span>{dayInfo.temperature.max + 'º'}</span>
        <span>{dayInfo.temperature.min + 'º'}</span>
      </div>
    </ForecastCard>
  )
}
