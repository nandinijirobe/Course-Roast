import express from "express"
import mysql from 'mysql2/promise'
import {PORT, HOST, USER, PASSWORD, DB} from "./config/index.js"
import { getCourses } from "./controllers/course.js";
const app = express()

// Establish mySQL connection!
const db = await mysql.createConnection({
    host: HOST,   
    user: USER,        
    password: PASSWORD, 
    database: DB   
  });

app.get('/courses', async (req, res) => {
  // Execute a simple query
  const results = await getCourses(db)
  res.send(results)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})