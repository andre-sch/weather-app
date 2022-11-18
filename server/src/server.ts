import express, { Request, Response } from "express"
import cors from "cors"

const app = express()
app.use(cors())

app.get('/', (request: Request, response: Response) => {
  response.json({ message: 'Hello world!' })
})

app.listen(8000)
