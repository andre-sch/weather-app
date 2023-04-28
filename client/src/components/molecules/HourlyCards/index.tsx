import { useContext, Fragment } from "react"

import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoGroupProvider"

import { timeConversion } from "../../../utils/timeConversion"
import { twilightSearch } from "../../../utils/twilightSearch"

import { HourCard } from "../../atoms/ForecastCard/HourCard"
import { HourTwilight } from "../../atoms/ForecastCard/HourTwilight"

export function HourlyCards() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const weatherInfo = useContext(WeatherInfoGroupContext)[DisplayedCityID]

  var hourIndexes: number[] = []
  for (let index = 0; index < timeConversion.DAY_IN_HOURS; index++) hourIndexes.push(index)

  return (
    <Fragment>
      {hourIndexes.map(hourIndex => {
        if (!weatherInfo) return <div key={hourIndex} className="forecast-card loading"></div>

        const hourInfo = weatherInfo.forecast.hourly[hourIndex]
        const twilightInfo = twilightSearch.existAtTime({
          dailyInfo: weatherInfo.forecast.daily, hourTimestamp: hourInfo.localTimestamp
        })

        const globalTimestamp = timeConversion.getUTC(
          hourInfo.localTimestamp, weatherInfo.forecast.timezone
        )

        return (
          <Fragment key={`${globalTimestamp}-hour`}>
            <HourCard hourInfo={hourInfo} isCurrentTime={hourIndex == 0} />
            { twilightInfo && <HourTwilight twilightInfo={twilightInfo} /> }
          </Fragment>
        )
      })}
    </Fragment>
  )
}
