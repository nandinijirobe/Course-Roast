import express from "express"
import mysql from 'mysql2'
import {PORT, HOST, USER, PASSWORD, DB} from "./config/index.js"
const app = express()

// Establish mySQL connection!
const db = mysql.createConnection({
    host: HOST,   
    user: USER,        
    password: PASSWORD, 
    database: DB   
  });
  
  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('Connected to MySQL');
  });


app.get('/courses', async (req, res) => {
  // Execute a simple query
  const query = 'SELECT * FROM courses';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results)
    })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})