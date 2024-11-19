import express from "express"
import { getAllCourses, sortAllCourses } from "../controllers/course.js";

const router = express.Router()

router.get('/', async (req, res) => {
    // Execute a simple query
  try {
    const results = await getAllCourses(req.query)
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

router.get('/sort', async (req, res) => {
  // Execute a simple query
try {
  const results = await sortAllCourses(req.query)
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