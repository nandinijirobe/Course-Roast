import db from '../config/db.js'

export async function getCourses () {
    const query = 'SELECT course_id, title, code, rating, difficulty, type FROM courses;'
    try {
        const [results, fields] = await db.query(query)
        return results
    } catch (err) {
        throw err
    }
}