import { useContext } from "react"

import { RegisteredCitySetterContext } from "../contexts/geoLocation/RegisteredCityProvider"
import { WeatherInfoGroupSetterContext, type IWeatherInfoGroup } from "../contexts/weatherInfo/WeatherInfoGroupProvider"
import { useCityWeatherInfo } from "../hooks/useCityWeatherInfo"

import type { ICityRegistry } from "../contexts/geoLocation/defaultCities"

export function useRegisterCity(newCityRegistry: ICityRegistry) {
  const setRegisteredCities = useContext(RegisteredCitySetterContext)
  const setWeatherInfoGroup = useContext(WeatherInfoGroupSetterContext)

  const { getWeatherInfoFromCityRegistry } = useCityWeatherInfo()

  return registerCity

  function registerCity() {
    changeRegistry()
    loadCityData()
  }

  function changeRegistry() {
    setRegisteredCities(previousRegistry => [newCityRegistry, ...previousRegistry])
  }

  function loadCityData() {
    getWeatherInfoFromCityRegistry(newCityRegistry)
      .then(weatherInfo => changeWeatherInfoGroup(weatherInfo))
      .catch(removeLastRegisteredCity)
  }

  function changeWeatherInfoGroup(newWeatherInfo: IWeatherInfoGroup) {
    setWeatherInfoGroup(previousWeatherInfo => ({ ...newWeatherInfo, ...previousWeatherInfo }))
  }

  function removeLastRegisteredCity() {
    setRegisteredCities(previousRegistry => previousRegistry.filter(
      registeredCity => registeredCity != newCityRegistry
    ))
  }
}
