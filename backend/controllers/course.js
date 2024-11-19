import db from '../config/db.js'

export async function getAllCourses (query = {}) {
    let sqlQuery = ""

    if (!query.q) {
        sqlQuery = `SELECT course_id, title, code, rating, difficulty, type FROM courses;`
    }
    else {
        sqlQuery = `SELECT course_id, title, code, rating, difficulty, type FROM courses WHERE title LIKE '%${query.q}%' OR code LIKE '%${query.q}%';`
    }
    try {
        const [results, fields] = await db.query(sqlQuery)
        return results
    } catch (err) {
        console.log(err)
        throw err
    }
}