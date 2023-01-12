import { memo } from "react"
import { textFormat } from "../../../../../utils/textFormat"

import type { registeredCity } from "../../../geoLocation/defaultCities"

import type { ICurrentWeatherInfo } from "../../../../../services/weatherService/data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "../../../../../services/weatherService/data/IWeatherForecastInfo"

import { TemperatureInfo } from "./TemperatureInfo"

import "./index.css"

interface CityCardProps {
  renderedCity: registeredCity,
  currentWeatherInfo?: ICurrentWeatherInfo,
  weatherForecastInfo?: IWeatherForecastInfo
}

export const CityCard = memo((props: CityCardProps) => {
  if (!props.currentWeatherInfo || !props.weatherForecastInfo) return <li></li>

  const [today] = props.weatherForecastInfo.daily
  return (
    <li className="city-card">
      <button className="drag-card">
        <img src="/assets/other/drag.svg" alt="Drag card" />
      </button>
      <button className="delete-card">
        <img
          src="/assets/other/close/bd-filled.svg"
          alt="Delete card"
          draggable={false} />
      </button>
      <TemperatureInfo
        current={props.currentWeatherInfo.temperature}
        min={today.temperature.min}
        max={today.temperature.max} />
      <img
        src={`/assets/weather/images/${props.currentWeatherInfo.condition.imgPath}`}
        alt={props.currentWeatherInfo.condition.description}
        className="weather-preview"
        draggable={false} />
      <footer>
        <h1>{props.renderedCity.name + ', ' + props.renderedCity.country}</h1>
        <span>{textFormat.capitalize(props.currentWeatherInfo.condition.description)}</span>
      </footer>
      <img src="/assets/other/city-card.svg" alt="" className="background" />
    </li>
  )
})
