import { locationAPI } from "../externals/locationAPI"
import { processCitySuggestions } from "../services/processCitySuggestions"

import type { Request, Response } from "express"

export async function getCitySuggestions(req: Request, res: Response) {
  const { cityInput } = req.query as { cityInput?: string }
  if (!cityInput) return res.sendStatus(400)

  const APIResponse = await locationAPI.getAutocomplete(cityInput)

  if (APIResponse.status == 200)
    return res.json(processCitySuggestions(APIResponse.data))
  else return res.sendStatus(APIResponse.status)
}
