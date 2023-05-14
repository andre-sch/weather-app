import { useRegisterCity } from "../../../hooks/useRegisterCity"
import { cityIdConversor } from "../../../utils/cityIdConversor"

import type { ICitySuggestion } from "../../../services/locationService/data/ICitySuggestion"
import type { ICityRegistry } from "../../../contexts/geoLocation/defaultCities"

import "./CityOption.css"

type Props = { option: ICitySuggestion, disabled: boolean }

export function CityOption({ option, disabled }: Props) {
  const { city, state, country } = option.location
  const { latitude, longitude } = option.coordinates

  const cityRegistry = getCityRegistryFromProps()
  const addCityRegistry = useRegisterCity(cityRegistry)

  return (
    <button
      className="city-option" type="submit"
      onClick={addCityRegistry} disabled={disabled}
    >
      <p>
        <em>{city}, </em>
        {(state ? `${state} - ` : '') + country}
      </p>
    </button>
  )

  function getCityRegistryFromProps(): ICityRegistry {
    const cityID = cityIdConversor.fromLocationToId([latitude, longitude])
    return { location: cityID, name: city, country }
  }
}
