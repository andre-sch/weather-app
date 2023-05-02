import { useContext } from "react"

import { cityIdConversor } from "../../../utils/cityIdConversor"
import { RegisteredCitySetterContext } from "../../../contexts/geoLocation/RegisteredCityProvider"
import { WeatherInfoGroupSetterContext } from "../../../contexts/weatherInfo/WeatherInfoGroupProvider"
import { getWeatherInfoFromCityRegistry } from "../../../hooks/useWeatherInfoGroup"

import type { ICityRegistry } from "../../../contexts/geoLocation/defaultCities"
import type { ICitySuggestions } from "../../../services/locationService/data/ICitySuggestions"

import "./index.css"

export function CitySuggestions(props: { suggestions: ICitySuggestions }) {
  const setRegisteredCities = useContext(RegisteredCitySetterContext)
  const setWeatherInfo = useContext(WeatherInfoGroupSetterContext)

  if (props.suggestions.length == 0)
    return <span className="no-suggestions">No suggestions!</span>

  else return (
    <div className="city-suggestions">
      {props.suggestions.map(suggestion => {
        const {
          coordinates: { latitude, longitude },
          location: { city, state, country }
        } = suggestion

        const cityID = cityIdConversor.fromLocationToId([latitude, longitude])

        return (
          <button
            type="submit" className="city-option" key={cityID}
            onClick={() => addCityRegistry({ location: cityID, name: city, country })}
          >
            <p>
              <em>{city}, </em>
              {(state ? `${state}  - ` : '') + country}
            </p>
          </button>
        )
      })}
    </div>
  )

  function addCityRegistry(cityRegistry: ICityRegistry) {
    registerCity(cityRegistry)
    loadCityData(cityRegistry)
  }

  function registerCity(newRegistry: ICityRegistry) {
    setRegisteredCities(previousRegistry => [newRegistry, ...previousRegistry])
  }

  async function loadCityData(cityRegistry: ICityRegistry) {
    const weatherInfo = await getWeatherInfoFromCityRegistry(cityRegistry)
    setWeatherInfo(previousWeatherInfo => ({ ...weatherInfo, ...previousWeatherInfo }))
  }
}
