import { useContext, useMemo } from "react"

import { DisplayedCityIdGetterContext } from "../../../../geoLocation/DisplayedCityIdProvider"
import { CurrentInfoGroupContext, ForecastInfoGroupContext } from "../../../../weatherInfo/WeatherInfoProvider"

import { SliderSection } from "../SliderSection"
import { getDetailCards } from "./getDetailCards"

export function DetailsSection() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)

  const currentInfo = useContext(CurrentInfoGroupContext)[DisplayedCityID]
  const forecastInfo = useContext(ForecastInfoGroupContext)[DisplayedCityID]

  const NUMBER_OF_DETAIL_CARDS = 6
  var detailIndexes: number[] = []
  for (let index = 0; index < NUMBER_OF_DETAIL_CARDS; index++) detailIndexes.push(index)

  const detailCards = useMemo(() => {
    if (!currentInfo || !forecastInfo)
      return detailIndexes.map(detailIndex => <div key={detailIndex} className="mini-card"></div>)

    return getDetailCards({ currentInfo, forecastInfo })
  }, [!forecastInfo, DisplayedCityID])

  return <SliderSection sectionID="details">{detailCards}</SliderSection>
}
