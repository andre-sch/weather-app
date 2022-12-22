import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import { getCurrentWeatherInfo } from "../src/controllers/getCurrentWeatherInfo"
import { getWeatherForecastInfo } from "../src/controllers/getWeatherForecastInfo"

const app = express()
app.use(cors())

app.get('/current', getCurrentWeatherInfo)
app.get('/forecast', getWeatherForecastInfo)

if (process.env.NODE_ENV == 'development') app.listen(8000)

export default app  // Vercel serverless function
