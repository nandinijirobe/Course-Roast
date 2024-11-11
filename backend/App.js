import express from "express"
import mysql from 'mysql2/promise'
import cors from 'cors'
import {PORT, HOST, USER, PASSWORD, DB} from "./config/index.js"
import { getCourses } from "./controllers/course.js";
const app = express()
app.use(cors({origin: 'http://localhost:5173'})) // enables CORS


// Establish mySQL connection!
const db = await mysql.createConnection({
    host: HOST,   
    user: USER,        
    password: PASSWORD, 
    database: DB   
  });

app.get('/courses', async (req, res) => {
  // Execute a simple query
  try {
    const results = await getCourses(db)
    res.status(200).json({
      status: "success",
      data: results
    })
  } catch (err) {
    res.status(500).json({ 
        status: 'err',
        data: err
    })
  }
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})