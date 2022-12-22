import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import { getCurrentWeatherInfo } from "./controllers/getCurrentWeatherInfo"
import { getWeatherForecastInfo } from "./controllers/getWeatherForecastInfo"

const app = express()
app.use(cors())

app.get('/current', getCurrentWeatherInfo)
app.get('/forecast', getWeatherForecastInfo)

app.listen(8000)
