import { useContext } from "react"

import { RegisteredCityGetterContext } from "../geoLocation/RegisteredCityProvider"
import { DisplayedCityIdGetterContext } from "../geoLocation/DisplayedCityIdProvider"

import { WeatherInfoGroupContext } from "../weatherInfo/WeatherInfoProvider"

import { textFormat } from "../../../utils/textFormat"
import { splitInMiddle } from "./splitInMiddle"

import "./index.css"

export function CurrentInfo() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const displayedCityId = useContext(DisplayedCityIdGetterContext)

  const weatherInfo = useContext(WeatherInfoGroupContext)[displayedCityId]
  if (!weatherInfo) return <div className="current-info loading"></div>

  const renderedCity = registeredCities.find(registeredCity => {
    const registeredCityId = registeredCity.location
    return registeredCityId == displayedCityId
  })!

  const [today] = weatherInfo.forecast.daily
  const [descriptionFirstLine, descriptionSecondLine] =
    splitInMiddle(textFormat.capitalize(weatherInfo.current.condition.description))

  return (
    <div className="current-info">
      <strong>{`${weatherInfo.current.temperature}º`}</strong>
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
        src={`/assets/weather/images/${weatherInfo.current.condition.imgPath}`}
        alt={weatherInfo.current.condition.description}
        draggable={false} />
    </div>
  )
}
