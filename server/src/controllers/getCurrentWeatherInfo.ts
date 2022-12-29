import { weatherAPI } from "../externals/weatherAPI"
import { processCurrentWeatherRawData } from "../services/processCurrentWeatherRawData"

import type { Request, Response } from "express"
import type { weatherQuery } from "./weatherQuery"

export async function getCurrentWeatherInfo(req: Request, res: Response) {
  const { latitude, longitude } = req.query as weatherQuery
  if (!latitude || !longitude) return res.sendStatus(400)

  const APIResponse = await weatherAPI.getCurrentWeather([latitude, longitude])

  if (APIResponse.status == 200) {
    return res.json(processCurrentWeatherRawData(APIResponse.data))
  }
  else return res.sendStatus(APIResponse.status)
}
