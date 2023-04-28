import { useContext, Fragment } from "react"

import { DisplayedCityIdGetterContext } from "../../../contexts/geoLocation/DisplayedCityIdProvider"
import { WeatherInfoGroupGetterContext } from "../../../contexts/weatherInfo/WeatherInfoGroupProvider"

import { DetailCardsGroup } from "./DetailCardsGroup"

export function DetailCards() {
  const DisplayedCityID = useContext(DisplayedCityIdGetterContext)
  const weatherInfo = useContext(WeatherInfoGroupGetterContext)[DisplayedCityID]

  const NUMBER_OF_DETAIL_CARDS = 6
  var detailIndexes: number[] = []
  for (let index = 0; index < NUMBER_OF_DETAIL_CARDS; index++) detailIndexes.push(index)

  return (
    <Fragment>
      {weatherInfo ? <DetailCardsGroup weatherInfo={weatherInfo} /> : (
        detailIndexes.map(detailIndex =>
          <div key={detailIndex} className="details-card loading"></div>
        )
      )}
    </Fragment>
  )
}
