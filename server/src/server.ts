import * as dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"

import { getCurrentWeatherInfo } from "./controllers/getCurrentWeatherInfo"

const app = express()
app.use(cors())

app.get('/current', getCurrentWeatherInfo)

app.listen(8000)
