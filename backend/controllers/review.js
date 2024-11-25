import db from '../config/db.js'
import { updateCourse } from './course.js'
// Review Queries

// GET http://localhost:5173/:course_id
// This function returns all the reviews for a specific course
export async function getReviews (course_id = "") {
    const query = `SELECT * FROM reviews WHERE course_id = ?;`

    try {
      return await db.query(query, [course_id])
    } catch (error) {
        console.log(error)
        throw error
    }
}


// Would this be a POST technically???
// First, get course_id, average(overall_rating, overall_diff, work_hrs) from the reviews
// Second, send numbers to the respective overall course standings
export async function updateOverallCourse (course_id = "") {
    const query = 'SELECT course_id, AVG(rating), AVG(difficulty), AVG(hours) FROM reviews where course_id = ?;'

    try {
        const review_data = await db.query(query, [course_id])
        console.log(review_data)
        
        let values = { rating: review_data.data.rating, difficulty: review_data.data.difficulty, hours: review_data.data.hours, code: review_data.data.course_id }
        
        const course_data = await updateCourse(values)
        console.log(course_data)
        return course_data
    } catch (error) {
        console.log(error)
        throw error
    }
}


// POST http://localhost:5173/:course_id/review
export async function addReview (course_id = "", body = {}) {
    let attr = ['course_id', 'comment', 'rating', 'difficulty', 'technical', 'creative', 'theory', 'hours', 'semester', 'year', 'grade_earned']
    attr.join(',')

    let values = [ course_id, body['comment'], body['rating'], body['difficulty'], body['technical'], body['creative'], body['theory'], body['hours'], body['semester'], body['year'], body['grade_earned']]
    values.join(',')

    const query = `INSERT INTO reviews (${attr}) VALUES (?);`

    try {
        const results = await db.query(query, [values])
        return results
    } catch (error) {
        console.log(error)
        throw error
    }
}