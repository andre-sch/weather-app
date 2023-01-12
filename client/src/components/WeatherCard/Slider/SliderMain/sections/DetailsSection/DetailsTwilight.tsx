import { twilight } from "../../../../../../utils/twilight"
import { textFormat } from "../../../../../../utils/textFormat"

import { DetailsCard } from "../DetailsCard"

import type { IWeatherForecastInfo } from "../../../../../../services/weatherService/data/IWeatherForecastInfo"

export function DetailsTwilight(props: { forecastInfo: IWeatherForecastInfo }) {
  const [nowInfo] = props.forecastInfo.hourly
  const [todayInfo] = props.forecastInfo.daily

  const nextTwilights = twilight.mapTheNext(todayInfo)
  if (todayInfo.localTime.noon <= nowInfo.localTimestamp) nextTwilights.reverse()

  const [mainTwilight, secondaryTwilight] = nextTwilights

  return (
    <DetailsCard
      iconPath="details/twilight.svg"
      iconDescription={textFormat.capitalize(mainTwilight.type)}
      mainInfo={textFormat.clockTime(mainTwilight.timestamp, 'hh:mm')}
      secondaryInfo={textFormat.capitalize(secondaryTwilight.type) +
        ` ${textFormat.clockTime(secondaryTwilight.timestamp, 'hh:mm')}`
      } />
  )
}
