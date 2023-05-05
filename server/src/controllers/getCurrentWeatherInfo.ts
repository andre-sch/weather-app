import { weatherAPI } from "../externals/weatherAPI"
import { ExternalServiceError } from "../externals/responseErrorHandling"
import { processCurrentWeatherRawData } from "../services/processCurrentWeatherRawData"

import type { Request, Response } from "express"
import type { weatherQuery } from "./weatherQuery"

export async function getCurrentWeatherInfo(req: Request, res: Response) {
  const { latitude, longitude } = req.query as weatherQuery
  if (!latitude || !longitude) return res.sendStatus(400)

  try {
    const APIResponse = await weatherAPI.getCurrentWeather([latitude, longitude])
    if (APIResponse.status == 200)
      return res.json(processCurrentWeatherRawData(APIResponse.data))
  }
  catch(error) {
    if (error instanceof ExternalServiceError)
      return res.sendStatus(502)
  }
  return res.sendStatus(500)
}
