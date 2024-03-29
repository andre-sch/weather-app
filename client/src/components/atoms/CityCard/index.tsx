import type { ReactNode } from "react"
import { textFormat } from "../../../utils/textFormat"

import { TemperatureInfo } from "./TemperatureInfo"

import type { ICityRegistry } from "../../../contexts/geoLocation/defaultCities"
import type { IWeatherInfo } from "../../../services/weatherService"

interface CityCardProps {
  extraClassName?: string
  renderedCity: ICityRegistry
  weatherInfo: IWeatherInfo
  weatherDescription?: ReactNode
  children?: ReactNode
}

export function CityCard(props: CityCardProps) {
  const [today] = props.weatherInfo.forecast.daily
  return (
    <div className={`city-card ${props.extraClassName || ''}`}>
      <TemperatureInfo
        current={props.weatherInfo.current.temperature}
        min={today.temperature.min}
        max={today.temperature.max} />

      <h1 className="city-location">
        {`${props.renderedCity.name}, `}
        <span>{props.renderedCity.country}</span>
      </h1>

      <figure className="weather-preview">
        <figcaption>
          {props.weatherDescription || textFormat.capitalize(
            props.weatherInfo.current.condition.description
          )}
        </figcaption>
        <img
          src={`/assets/weather/images/${props.weatherInfo.current.condition.imgPath}`}
          alt="" draggable={false} />
      </figure>
      {props.children}
    </div>
  )
}
