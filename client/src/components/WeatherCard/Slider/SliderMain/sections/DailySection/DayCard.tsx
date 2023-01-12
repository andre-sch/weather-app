import { timeConversion } from "../../../../../../utils/timeConversion"
import { ForecastCard } from "../ForecastCard"

import type { IWeatherForecastInfo } from "../../../../../../services/weatherService/data/IWeatherForecastInfo"

interface DayCardProps { forecastInfo: IWeatherForecastInfo, dayIndex: number }

export function DayCard(props: DayCardProps) {
  const dayInfo = props.forecastInfo.daily[props.dayIndex]
  const dayAbbreviation = timeConversion.getWeekday(dayInfo.localTime.noon)

  return (
    <ForecastCard
      time={props.dayIndex == 0 ? 'Today' : dayAbbreviation}
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
