import { weatherAPI } from "../externals/weatherAPI";
import { processWeatherForecastRawData } from "../services/processWeatherForecastRawData";

import type { Request, Response } from "express";
import type { weatherQuery } from "./weatherQuery";

export async function getWeatherForecastInfo(req: Request, res: Response) {
  const { latitude, longitude } = req.query as weatherQuery
  if (!latitude || !longitude) return res.sendStatus(400)

  const APIResponse = await weatherAPI.getWeatherForecast([latitude, longitude])

  if (APIResponse.status == 200) {
    return res.json(processWeatherForecastRawData(APIResponse.data))
  }
  else return res.sendStatus(APIResponse.status)
}
