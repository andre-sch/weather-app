import { getOppositeAngle } from "./getOppositeAngle"
import { windDirections, type cardinalDirections } from "../../models/ICurrentWeatherInfo"

export function getWindDirection(windBlowsFrom: number) {
  var windDirection = 'N' as cardinalDirections

  const windBlowsTo = getOppositeAngle(windBlowsFrom)

  var startingAngle = 22.5
  const ANGLE_RANGE_SIZE = 45

  for (let index = 1; index < windDirections.length; index++) {
    const endingAngle = startingAngle + ANGLE_RANGE_SIZE

    if (startingAngle <= windBlowsTo && windBlowsTo < endingAngle) {
      windDirection = windDirections[index]; break
    }
    startingAngle = endingAngle
  }
  return windDirection
}
