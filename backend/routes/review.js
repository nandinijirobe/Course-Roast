import express from "express"
import { getReviews, addReview } from "../controllers/review.js"
import bodyParser from "body-parser"

const router = express.Router()

router.use(bodyParser.json())
// GET reviews for a specific course to display
router.get('/:course_id', async (req, res) => {
  
  try {
    const results = await getReviews(req.params.course_id)
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


// POST add a review for a certain course
router.post('/:course_id/add', async (req, res) => {
  try {
    addReview(req.params.course_id, req.body)
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

export {router}