export async function getCourses (db) {
    const query = 'SELECT * FROM courses;'
    try {
        const [results, fields] = await db.query(query)
        console.log(results)
        return results
    } catch (err) {
        console.log(err)
    }
}