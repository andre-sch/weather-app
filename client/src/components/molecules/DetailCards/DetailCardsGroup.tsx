import { textFormat } from "../../../utils/textFormat"
import { rangeMapper } from "../../../utils/rangeMapper"

import { DetailsCard } from "../../atoms/DetailsCard"
import { DetailsTwilight } from "../../atoms/DetailsCard/DetailsTwilight"

import type { IWeatherInfo } from "../../../services/weatherService"

const KILO_UNIT_PREFIX = 1000
const MPS_TO_KPH_CONVERSION_FACTOR = 3.6

export function DetailCardsGroup(props: { weatherInfo: IWeatherInfo }) {
  const { current: currentInfo, forecast: forecastInfo } = props.weatherInfo
  return (
    <>
      <DetailsTwilight forecastInfo={forecastInfo} />

      <DetailsCard
        iconPath="details/temperature.svg"
        iconDescription="Feels like"
        mainInfo={currentInfo.feelsLike + 'º'}
        secondaryInfo={`While actual ${currentInfo.temperature}º`} />

      <DetailsCard
        iconPath="details/wind.svg"
        mainInfo={Math.round(currentInfo.wind.speed * MPS_TO_KPH_CONVERSION_FACTOR) + ' km/h'}
        secondaryInfo={`${currentInfo.wind.direction} direction`} />

      <DetailsCard
        extraClassName="rainfall"
        iconPath="details/rain.svg"
        iconDescription="rainfall"
        mainInfo={forecastInfo.rainAmount.lastHour.toFixed(1) + ' mm'}
        secondaryInfo={forecastInfo.rainAmount.next24h.toFixed(1) + 'mm next 24h'} />

      <DetailsCard
        iconPath="details/humidity.svg"
        mainInfo={currentInfo.humidity + '%'}
        secondaryInfo={textFormat.capitalize(
          rangeMapper.getDescription(rangeMapper.humidityLevels, currentInfo.humidity)
        )} />

      <DetailsCard
        iconPath="details/visibility.svg"
        mainInfo={Math.round(currentInfo.visibility / KILO_UNIT_PREFIX) + 'km'}
        secondaryInfo={textFormat.capitalize(
          rangeMapper.getDescription(rangeMapper.visibilityConditions, currentInfo.visibility)
        )} />
    </>
  )
}
