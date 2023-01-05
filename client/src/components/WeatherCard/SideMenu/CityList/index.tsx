import { useContext, useMemo } from "react"

import { RegisteredCityGetterContext } from "../../geoLocation/RegisteredCityProvider"
import { CurrentInfoGroupContext, ForecastInfoGroupContext } from "../../weatherInfo/WeatherInfoProvider"

import { CityCard } from "./CityCard"

import "./index.css"

export function CityList() {
  const registeredCities = useContext(RegisteredCityGetterContext)

  const currentInfoGroup = useContext(CurrentInfoGroupContext)
  const forecastInfoGroup = useContext(ForecastInfoGroupContext)

  return (
    <ul>
      {registeredCities.map(registeredCity => {
        const cityID = registeredCity.location

        const propsMemo = useMemo(() => ({
          renderedCity: registeredCity,
          currentWeatherInfo: currentInfoGroup[cityID],
          weatherForecastInfo: forecastInfoGroup[cityID]
        }), [registeredCities.length, !currentInfoGroup[cityID]])

        return <CityCard key={cityID} {...propsMemo}/>
      })}
    </ul>
  )
}
