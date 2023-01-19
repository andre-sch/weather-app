import { useContext } from "react"

import { timeConversion } from "../../../utils/timeConversion"

import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoProvider"

import { SliderSection } from "../SliderSection"
import { DayCard } from "../../atoms/ForecastCard/DayCard"

export function DailySection() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const weatherInfo = useContext(WeatherInfoGroupContext)[DisplayedCityID]

  const NUMBER_OF_DAY_CARDS = 8
  var dayIndexes: number[] = []
  for (let index = 0; index < NUMBER_OF_DAY_CARDS; index++) dayIndexes.push(index)

  return (
    <SliderSection sectionID="daily">
      {dayIndexes.map(dayIndex => {
        if (!weatherInfo) return <div key={dayIndex} className="mini-card loading"></div>

        const dayInfo = weatherInfo.forecast.daily[dayIndex]
        return (
          <DayCard
            key={`${timeConversion.getDayStart(dayInfo.localTime.noon)}-day`}
            forecastInfo={weatherInfo.forecast} dayIndex={dayIndex} />
        )
      })}
    </SliderSection>
  )
}