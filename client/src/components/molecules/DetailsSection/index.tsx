import { useContext } from "react"

import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupContext } from "../../../contexts/weatherInfo/WeatherInfoProvider"

import { SliderSection } from "../SliderSection"
import { getDetailCards } from "./getDetailCards"

export function DetailsSection() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const weatherInfo = useContext(WeatherInfoGroupContext)[DisplayedCityID]

  const NUMBER_OF_DETAIL_CARDS = 6
  var detailIndexes: number[] = []
  for (let index = 0; index < NUMBER_OF_DETAIL_CARDS; index++) detailIndexes.push(index)

  return (
    <SliderSection sectionID="details">
      {weatherInfo ? getDetailCards(weatherInfo) : (
        detailIndexes.map(detailIndex =>
          <div key={detailIndex} className="mini-card loading"></div>
        )
      )}
    </SliderSection>
  )
}
