import express from "express"
import {PORT} from "./config/index.js"
import cors from 'cors'
import { router as courseRouter } from './routes/course.js'; 
import { router as reviewRouter } from './routes/review.js'; 

const app = express()
app.use(cors({origin: 'http://localhost:5173'})) // enables CORS

app.use('/courses', courseRouter)

app.use('/reviews', reviewRouter)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})