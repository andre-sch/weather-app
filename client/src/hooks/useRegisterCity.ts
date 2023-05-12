import { useContext } from "react"

import { RegisteredCitySetterContext } from "../contexts/geoLocation/RegisteredCityProvider"
import { WeatherInfoGroupSetterContext } from "../contexts/weatherInfo/WeatherInfoGroupProvider"
import { getWeatherInfoFromCityRegistry } from "./useWeatherInfoGroup"

import type { ICityRegistry } from "../contexts/geoLocation/defaultCities"

export function useRegisterCity(newCityRegistry: ICityRegistry) {
  const setRegisteredCities = useContext(RegisteredCitySetterContext)
  const setWeatherInfoGroup = useContext(WeatherInfoGroupSetterContext)

  return registerCity

  function registerCity() {
    changeRegistry()
    loadCityData()
  }

  function changeRegistry() {
    setRegisteredCities(previousRegistry => [newCityRegistry, ...previousRegistry])
  }

  async function loadCityData() {
    const weatherInfo = await getWeatherInfoFromCityRegistry(newCityRegistry)
    setWeatherInfoGroup(previousWeatherInfo => ({ ...weatherInfo, ...previousWeatherInfo }))
  }
}
