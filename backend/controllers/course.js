export async function getCourses (db) {
    const query = 'SELECT course_id, title, code, rating, difficulty, type FROM courses;'
    try {
        const [results, fields] = await db.query(query)
        return results
    } catch (err) {
        throw err
    }
}