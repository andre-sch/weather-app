import { useContext, Fragment } from "react"

import { textFormat } from "../../../utils/textFormat"

import { RegisteredCityGetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupGetterContext } from "../../../contexts/weatherInfo/WeatherInfoGroupProvider"

import { CityCard } from "../../atoms/CityCard"

import "./index.css"

export function CurrentCityInfo() {
  const registeredCities = useContext(RegisteredCityGetterContext)
  const displayedCityID = useContext(DisplayedCityIdGetterContext)

  const renderedCity = registeredCities.find(registeredCity => {
    const registeredCityID = registeredCity.location
    return registeredCityID == displayedCityID
  })

  const weatherInfo = useContext(WeatherInfoGroupGetterContext)[displayedCityID]
  if (!renderedCity || !weatherInfo) return <div className="current-city-info loading"></div>

  const [descriptionFirstLine, descriptionSecondLine] = textFormat.splitInMiddle(
    textFormat.capitalize(weatherInfo.current.condition.description)
  )

  return (
    <CityCard
      extraClassName="current-city-info"
      renderedCity={renderedCity}
      weatherInfo={weatherInfo}
      weatherDescription={
        <Fragment>
          {descriptionFirstLine}<br/>
          {descriptionSecondLine}
        </Fragment>
      }
    />
  )
}
