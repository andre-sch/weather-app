import { capitalize } from "../../../../../utils/capitalize"

import type { registeredCity } from "../../../geoLocation/defaultCities"

import type { ICurrentWeatherInfo } from "../../../../../services/weatherService/data/ICurrentWeatherInfo"
import type { IWeatherForecastInfo } from "../../../../../services/weatherService/data/IWeatherForecastInfo"

import "./index.css"

interface CityCardProps {
  renderedCity: registeredCity,
  currentWeatherInfo?: ICurrentWeatherInfo,
  weatherForecastInfo?: IWeatherForecastInfo
}

export function CityCard(props: CityCardProps) {
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
      <div className="temperature">
        <strong>{props.currentWeatherInfo.temperature}</strong>
        <div className="min-max vertical">
          <span>{`${today.temperature.min.toString().padStart(2, '0')}º`}</span>
          <span>{`${today.temperature.max.toString().padStart(2, '0')}º`}</span>
        </div>
      </div>
      <img
        src={`/assets/weather/images/${props.currentWeatherInfo.condition.imgPath}`}
        alt={props.currentWeatherInfo.condition.description}
        className="weather-preview"
        draggable={false} />
      <footer>
        <h1>{props.renderedCity.name + ', ' + props.renderedCity.country}</h1>
        <span>{capitalize(props.currentWeatherInfo.condition.description)}</span>
      </footer>
      <img src="/assets/other/city-card.svg" alt="" className="background" />
    </li>
  )
}
