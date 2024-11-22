import express from "express"
import bodyParser from "body-parser";
import { getAllCourses, sortAllCourses, filterCourses, addCourse, getCourse } from "../controllers/course.js";

const router = express.Router()

router.use(bodyParser.json())

router.get('/', async (req, res) => {
   // Get all courses + search query
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
  // Sort all courses with multiple columns
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

router.get('/filter', async (req, res) => {
  // Filter courses by certain columns

  try {
    const results = await filterCourses(req.query)
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

router.post('/add', async (req, res) => {
  // Add a course to the database
  
  try {
    addCourse(req.body)
    res.status(200).json({
      status: "success",
      data: req.body
    })
  } catch (err) {
    res.status(500).json({ 
        status: 'err',
        data: err
    })
  }

})

router.get('/:code', async (req, res) => {
  // Get course page details
  
  try {
    const results = await getCourse(req.params.code)
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