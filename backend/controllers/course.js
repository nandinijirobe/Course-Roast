import db from '../config/db.js'
// Course Queries

/**
 * @route GET /courses
 * @desc Fetch all courses summaries listed in the database + search by query params

 * @inputExample  -- GET http://localhost:5173/courses?q=CS111
 * @outputExample -- next comment block
{
  "status": "success",
  "data": [
    {
      "course_id": 1,
      "title": "Program Design I",
      "code": "CS111",
      "rating": 0,
      "difficulty": 0,
      "type": "required elective"
    }
  ]
}
*/
export async function getAllCourses (query = {}) {
    let sqlQuery = ""
    console.log(query)
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

/**
 * @route GET /courses/sort
 * @desc Fetch all courses summaries listed in the database in SORTED order

 * @inputExample  -- GET http://localhost:5173/courses/sort?%2Blevel,-title,+code
    NOTE : %2B is the encoding for a + because + is interpreted as a space by the browser
 * @outputExample -- next comment block
{
  "status": "success",
  "data": [
    {
      "course_id": 1,
      "title": "Program Design I",
      "code": "CS111",
      "rating": 0,
      "difficulty": 0,
      "type": "required elective"
    }
  ]
}
*/
export async function sortAllCourses (query = {}) {

    const sortcols = query.q.split(",")
    let orderParams = ""
    

    for (let i = 0; i < sortcols.length; i++) {
        if (sortcols[i][0] == "+") {
            orderParams += sortcols[i].substring(1); 
        }
        else if (sortcols[i][0] == "-") {
            orderParams += sortcols[i].substring(1) + " DESC"; 
        }
        if (i != sortcols.length - 1) {
            orderParams += ", "
        }
    }
    
    const sqlQuery = `SELECT course_id, title, code, rating, difficulty, type FROM courses ORDER BY ${orderParams};`
    try {
        const [results, fields] = await db.query(sqlQuery)
        return results
    } catch (err) {
        console.log(err)
        throw err
    }
}