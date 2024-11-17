import express from "express"
import { getCourses } from "../controllers/course.js";

const router = express.Router()

router.get('/', async (req, res) => {
    // Execute a simple query
    try {
      const results = await getCourses()
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

export {router}