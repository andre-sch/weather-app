import { useContext, useMemo } from "react"

import { DisplayedCityIdGetterContext } from "../../../../geoLocation/DisplayedCityIdProvider"
import { ForecastInfoGroupContext } from "../../../../weatherInfo/WeatherInfoProvider"

import { timeConversion } from "../../../../../../utils/timeConversion"

import { SliderSection } from "../SliderSection"
import { HourCard } from "./HourCard"

export function HourlySection() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const forecastInfo = useContext(ForecastInfoGroupContext)[DisplayedCityID]

  var hourIndexes: number[] = []
  for (let index = 0; index < timeConversion.DAY_IN_HOURS; index++) hourIndexes.push(index)

  const hourCards = useMemo(() => hourIndexes.map(hourIndex => {
    if (!forecastInfo) return <div key={hourIndex} className="mini-card"></div>

    const hourInfo = forecastInfo.hourly[hourIndex]
    return (
      <HourCard
        key={`${hourInfo.localTimestamp}-hour`}
        forecastInfo={forecastInfo} hourIndex={hourIndex} />
    )
  }), [!forecastInfo, DisplayedCityID])

  return <SliderSection sectionID="hourly">{hourCards}</SliderSection>
}
