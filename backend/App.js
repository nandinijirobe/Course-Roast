import express from "express"
import {PORT} from "./config/index.js"
import cors from 'cors'
import { router as courseRouter } from './routes/course.js'; 

const app = express()
app.use(cors({origin: 'http://localhost:5173'})) // enables CORS

app.use('/courses', courseRouter)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})