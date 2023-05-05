import { locationAPI } from "../externals/locationAPI"
import { ExternalServiceError } from "../externals/responseErrorHandling"
import { processCitySuggestions } from "../services/processCitySuggestions"

import type { Request, Response } from "express"

export async function getCitySuggestions(req: Request, res: Response) {
  const { cityInput } = req.query as { cityInput?: string }
  if (!cityInput) return res.sendStatus(400)

  try {
    const APIResponse = await locationAPI.getAutocomplete(cityInput)
    if (APIResponse.status == 200)
      return res.json(processCitySuggestions(APIResponse.data))
  }
  catch(error) {
    if (error instanceof ExternalServiceError)
      return res.sendStatus(502)
  }
  return res.sendStatus(500)
}
