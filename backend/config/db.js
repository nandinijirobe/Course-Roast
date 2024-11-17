import mysql from 'mysql2/promise'
import {PORT, HOST, USER, PASSWORD, DB} from "./index.js"


// Establish mySQL connection!
const db = mysql.createPool({
    host: HOST,   
    user: USER,        
    password: PASSWORD, 
    database: DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit : 0  
});

export default db

