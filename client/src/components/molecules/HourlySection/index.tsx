import { useContext } from "react"

import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoProvider"

import { timeConversion } from "../../../utils/timeConversion"

import { SliderSection } from "../SliderSection"
import { HourCard } from "../../atoms/ForecastCard/HourCard"

export function HourlySection() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const weatherInfo = useContext(WeatherInfoGroupContext)[DisplayedCityID]

  var hourIndexes: number[] = []
  for (let index = 0; index < timeConversion.DAY_IN_HOURS; index++) hourIndexes.push(index)

  return (
    <SliderSection sectionID="hourly">
      {hourIndexes.map(hourIndex => {
        if (!weatherInfo) return <div key={hourIndex} className="mini-card loading"></div>

        const hourInfo = weatherInfo.forecast.hourly[hourIndex]
        const globalTimestamp = timeConversion.getUTC(
          hourInfo.localTimestamp, weatherInfo.forecast.timezone
        )

        return (
          <HourCard
            key={`${globalTimestamp}-hour`}
            forecastInfo={weatherInfo.forecast} hourIndex={hourIndex} />
        )
      })}
    </SliderSection>
  )
}
