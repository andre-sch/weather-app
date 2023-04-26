import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import { getCurrentWeatherInfo } from "../src/controllers/getCurrentWeatherInfo"
import { getWeatherForecastInfo } from "../src/controllers/getWeatherForecastInfo"
import { getCitySuggestions } from "../src/controllers/getCitySuggestions"

const app = express()
app.use(cors())

app.get('/weather/current', getCurrentWeatherInfo)
app.get('/weather/forecast', getWeatherForecastInfo)
app.get('/location/autocomplete', getCitySuggestions)

if (process.env.NODE_ENV == 'development') app.listen(8000)

export default app  // Vercel serverless function
