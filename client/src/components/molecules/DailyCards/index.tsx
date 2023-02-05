import { useContext, Fragment } from "react"

import { timeConversion } from "../../../utils/timeConversion"

import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoProvider"

import { DayCard } from "../../atoms/ForecastCard/DayCard"

export function DailyCards() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const weatherInfo = useContext(WeatherInfoGroupContext)[DisplayedCityID]

  const NUMBER_OF_DAY_CARDS = 8
  var dayIndexes: number[] = []
  for (let index = 0; index < NUMBER_OF_DAY_CARDS; index++) dayIndexes.push(index)

  return (
    <Fragment>
      {dayIndexes.map(dayIndex => {
        if (!weatherInfo) return <div key={dayIndex} className="forecast-card loading"></div>

        const dayInfo = weatherInfo.forecast.daily[dayIndex]
        return (
          <DayCard
            key={`${timeConversion.getDayStart(dayInfo.localTime.sunrise)}-day`}
            dayInfo={dayInfo} isCurrentDay={dayIndex == 0} />
        )
      })}
    </Fragment>
  )
}
