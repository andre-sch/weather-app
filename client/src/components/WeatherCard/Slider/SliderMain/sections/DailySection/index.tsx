import { useContext, useMemo } from "react"

import { DisplayedCityIdGetterContext } from "../../../../geoLocation/DisplayedCityIdProvider"
import { ForecastInfoGroupContext } from "../../../../weatherInfo/WeatherInfoProvider"

import { SliderSection } from "../SliderSection"
import { DayCard } from "./DayCard"

export function DailySection() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const forecastInfo = useContext(ForecastInfoGroupContext)[DisplayedCityID]

  const NUMBER_OF_DAY_CARDS = 8
  var dayIndexes: number[] = []
  for (let index = 0; index < NUMBER_OF_DAY_CARDS; index++) dayIndexes.push(index)

  const dayCards = useMemo(() => dayIndexes.map(dayIndex => {
    if (!forecastInfo) return <div key={dayIndex} className="mini-card loading"></div>

    const dayInfo = forecastInfo.daily[dayIndex]
    return (
      <DayCard
        key={`${timeConversion.getDayStart(dayInfo.localTime.noon)}-day`}
        forecastInfo={forecastInfo} dayIndex={dayIndex} />
    )
  }), [!forecastInfo, DisplayedCityID])

  return <SliderSection sectionID="daily">{dayCards}</SliderSection>
}
