import db from '../config/db.js'
import { updateCourse } from './course.js'
// Review Queries

// GET http://localhost:5173/:course_id
// This function returns all the reviews for a specific course
export async function getReviews (course_id = "") {
    const query = `SELECT * FROM reviews WHERE course_id = ?;`
    try {
        const [results, fields] = await db.query(query, [course_id])
        return results
    } catch (error) {
        console.log(error)
        throw error
    }
}


// Put Request but is not an API call
// First, get course_id, average(overall_rating, overall_diff, technical, creative, theory, work_hrs) from the reviews
// Second, send numbers to the respective overall course standings
export async function updateOverallCourse (course_id = "") {
    const query = 'SELECT course_id, AVG(rating) as avg_rating, AVG(difficulty) as avg_difficulty, AVG(hours) as avg_hours, AVG(technical), AVG(creative), AVG(theory) FROM reviews where course_id = ?;'

    try {
        const [results, fields] = await db.query(query, [course_id])
        
        let values = { rating: results[0].avg_rating, difficulty: results[0].avg_difficulty, hours: results[0].avg_hours, technical: results[0].technical, creative: results[0].creative, theory: results[0].theory, course_id: results[0].course_id }
        
        const course_data = await updateCourse(values)
        return course_data
    } catch (error) {
        console.log(error)
        throw error
    }
}


// POST http://localhost:5173/reviews/:course_id/add
export async function addReview (course_id = "", body = {}) {
    let attr = ['course_id', 'comment', 'rating', 'difficulty', 'technical', 'creative', 'theory', 'hours', 'semester', 'year', 'grade_earned']
    attr.join(',')

    let values = [ course_id, body['comment'], body['rating'], body['difficulty'], body['technical'], body['creative'], body['theory'], body['hours'], body['semester'], body['year'], body['grade_earned']]
    values.join(',')

    const query = `INSERT INTO reviews (${attr}) VALUES (?);`

    try {
        const [results, fields] = await db.query(query, [values])
        const updates = await updateOverallCourse(course_id)
        return results
    } catch (error) {
        console.log(error)
        throw error
    }
}