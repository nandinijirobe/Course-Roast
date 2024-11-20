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
    sort by level, title, code, rating, difficulty
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

/**
 * @route GET /courses/filter
 * @desc Fetch all courses summaries listed in the database in SORTED order

 * @inputExample  -- GET http://localhost:3000/courses/filter?level=100,200&rating=2-5&difficulty=1-3&type=required
    filter by level, rating, type and difficulty
 * @outputExample -- next comment block (not exact for this input. input is exhaustive to show all possible filter conditions)
{
  "status": "success",
  "data": [
    {
      "course_id": 11,
      "title": "Program Design I",
      "code": "CS111",
      "rating": 5,
      "difficulty": 0,
      "type": "required"
    },
    {
      "course_id": 12,
      "title": "Program Design II",
      "code": "CS141",
      "rating": 3,
      "difficulty": 0,
      "type": "required"
    }
}
*/

export async function filterCourses (filters = {}) {
  console.log(filters)
  let sqlQuery = ""
  let sqlParams = []
  let paramValues = []
  let levelParams = []
  
  
  if ('level' in filters) {
    const levels = filters.level.split(',')
    
    for (let i = 0; i < levels.length; i++) {
      levelParams.push(parseInt(levels[i])) 
      
    }
    sqlParams.push("level IN (?)")
    paramValues.push(levelParams)
  }

  if ('type' in filters) {
    sqlParams.push("type = ?")
    paramValues.push(filters.type)
  }
  
  if ('rating' in filters) {
    const ratingParams = filters.rating.split('-')
    sqlParams.push("rating BETWEEN ? AND ?")
    paramValues.push(parseInt(ratingParams[0]))
    paramValues.push(parseInt(ratingParams[1]))
  }

  if ('difficulty' in filters) {
    const difficultyParams = filters.difficulty.split('-')
    sqlParams.push("difficulty BETWEEN ? AND ?")
    paramValues.push(parseInt(difficultyParams[0]))
    paramValues.push(parseInt(difficultyParams[1]))
  }
  

  sqlParams = sqlParams.length > 1 ? sqlParams.join(' AND ') : sqlParams

  sqlQuery = 'SELECT course_id, title, code, rating, difficulty, type FROM courses WHERE ' + sqlParams + ";"
  
  try {
      const [results, fields] = await db.query(sqlQuery, paramValues)
      return results
  } catch (err) {
      console.log(err)
      throw err
  }
}