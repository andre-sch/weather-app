import { useContext } from "react"

import { RegisteredCityGetterContext } from "../geoLocation/RegisteredCityProvider"
import { DisplayedCityIdGetterContext } from "../geoLocation/DisplayedCityIdProvider"

import { CurrentInfoGroupContext, ForecastInfoGroupContext } from "../weatherInfo/WeatherInfoProvider"

import { textFormat } from "../../../utils/textFormat"
import { splitInMiddle } from "./splitInMiddle"

import "./index.css"

export function CurrentInfo() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const displayedCityId = useContext(DisplayedCityIdGetterContext)

  const currentWeatherInfo = useContext(CurrentInfoGroupContext)[displayedCityId]
  const weatherForecastInfo = useContext(ForecastInfoGroupContext)[displayedCityId]

  if (!currentWeatherInfo || !weatherForecastInfo) return <div className="current-info"></div>

  const renderedCity = registeredCities.find(registeredCity => {
    const registeredCityId = registeredCity.location
    return registeredCityId == displayedCityId
  })!

  const [today] = weatherForecastInfo.daily
  const [descriptionFirstLine, descriptionSecondLine] =
    splitInMiddle(textFormat.capitalize(currentWeatherInfo.condition.description))

  return (
    <div className="current-info">
      <strong>{`${currentWeatherInfo.temperature}º`}</strong>
      <div className="card-location">
        {`${renderedCity.name},`}
        <span>{renderedCity.country}</span>
      </div>
      <div className="min-max vertical">
        <span>{`${today.temperature.max.toString().padStart(2, '0')}º`}</span>
        <span>{`${today.temperature.min.toString().padStart(2, '0')}º`}</span>
      </div>
      <h1>{descriptionFirstLine}<br/>{descriptionSecondLine}</h1>
      <img
        src={`/assets/weather/images/${currentWeatherInfo.condition.imgPath}`}
        alt={currentWeatherInfo.condition.description}
        draggable={false} />
    </div>
  )
}
