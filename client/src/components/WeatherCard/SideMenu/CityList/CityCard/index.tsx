import { textFormat } from "../../../../../utils/textFormat"

import { TemperatureInfo } from "./TemperatureInfo"

import type { registeredCity } from "../../../geoLocation/defaultCities"
import type { IWeatherInfoGroup } from "../../../weatherInfo/WeatherInfoProvider"

import "./index.css"

interface CityCardProps {
  renderedCity: registeredCity,
  weatherInfo: IWeatherInfoGroup[string],
}

export function CityCard(props: CityCardProps) {
  if (!props.weatherInfo) return CityCardMockup

  const [today] = props.weatherInfo.forecast.daily
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
        current={props.weatherInfo.current.temperature}
        min={today.temperature.min}
        max={today.temperature.max} />
      <img
        src={`/assets/weather/images/${props.weatherInfo.current.condition.imgPath}`}
        alt={props.weatherInfo.current.condition.description}
        className="weather-preview"
        draggable={false} />
      <footer>
        <h1>{props.renderedCity.name + ', ' + props.renderedCity.country}</h1>
        <span>{textFormat.capitalize(props.weatherInfo.current.condition.description)}</span>
      </footer>
      <img src="/assets/other/city-card.svg" alt="" className="background" />
    </li>
  )
}

const CityCardMockup = (
  <li className="city-card">
    <img src="/assets/other/city-card.svg" alt="" className="background" />
  </li>
)
