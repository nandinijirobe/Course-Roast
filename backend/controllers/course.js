import db from '../config/db.js'

import { getReviews } from './review.js'
// Course Queries
// 
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
    let sqlParams = []
    if (!query.q) {
      sqlQuery = `SELECT course_id, title, code, rating, difficulty, type FROM courses;`
    }
    else {
      sqlParams.push(`%${query.q}%`)
      sqlParams.push(`%${query.q}%`)
      sqlQuery = `SELECT course_id, title, code, rating, difficulty, type FROM courses WHERE title LIKE ? OR code LIKE ?;`
    }
    try {
      console.log(sqlQuery)
      const [results, fields] = await db.query(sqlQuery, sqlParams)
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
    let orderParams = []
    const validCols = ['level', 'title', 'code', 'rating', 'difficulty']

    for (let i = 0; i < sortcols.length; i++) {
      const colname = sortcols[i].substring(1)

      if (validCols.includes(colname)) {
        if (sortcols[i][0] == "+") {
          orderParams.push(colname+' ASC'); 
        }
        else if (sortcols[i][0] == "-") {
          orderParams.push(colname+' DESC'); 
        }
      }
    }

    orderParams = orderParams.join(',')
    
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


/**
 * @route POST /courses/add
 * @desc Add a course to database

 * @inputExample  -- GET http://localhost:3000/courses/add
   req body : {
    "title" : "Database Systems",
    "code" : "CS480",
    "type" : "technical",
    "level" : 400,
    "credits_ug" : 3,
    "credits_g" : 4,
    "website" : "https://www.cs.uic.edu/~bglavic/cs480/2024-spring/syllabus/"

}
 * @outputExample -- next comment block 
{
  "status": "success",
  "data": {
    "title" : "Database Systems",
    "code" : "CS480",
    "type" : "technical",
    "level" : 400,
    "credits_ug" : 3,
    "credits_g" : 4,
    "website" : "https://www.cs.uic.edu/~bglavic/cs480/2024-spring/syllabus/"

}
}
*/

export async function addCourse (reqBody = {}) {
  let sqlQuery = ""
  let sqlParams = []
  let paramValues = []

  if ('title' in reqBody) {
    sqlParams.push('title')
    paramValues.push(reqBody['title'])
  }

  if ('code' in reqBody) {
    sqlParams.push('code')
    paramValues.push(reqBody['code'])
  }

  if ('type' in reqBody) {
    sqlParams.push('type')
    paramValues.push(reqBody['type'])
  }

  if ('level' in reqBody) {
    sqlParams.push('level')
    paramValues.push(reqBody['level'])
  }

  if ('credits_ug' in reqBody) {
    sqlParams.push('credits_ug')
    paramValues.push(reqBody['credits_ug'])
  }

  if ('credits_g' in reqBody) {
    sqlParams.push('credits_g')
    paramValues.push(reqBody['credits_g'])
  }

  if ('website' in reqBody) {
    sqlParams.push('website')
    paramValues.push(reqBody['website'])
  }

  
  sqlParams = sqlParams.length > 1 ? sqlParams.join(',') : sqlParams

  sqlQuery = `INSERT INTO courses (${sqlParams}) VALUES (?);`
  try {
      const [results, fields] = await db.query(sqlQuery, [paramValues])
      return results
  } catch (err) {
      console.log(err)
      throw err
  }
}


/**
 * @route GET /courses/:code
 * @desc Get course details

 * @inputExample  -- GET http://localhost:3000/courses/CS111
   
 * @outputExample -- next comment block 
{
  "status": "success",
  "data": {
    "title" : "Database Systems",
    "code" : "CS480",
    "type" : "technical",
    "level" : 400,
    "credits_ug" : 3,
    "credits_g" : 4,
    "website" : "https://www.cs.uic.edu/~bglavic/cs480/2024-spring/syllabus/"

}
*/

export async function getCourse (course_id = "") {
  const sqlQuery = `SELECT title, code, type, credits_ug, credits_g, website, rating, difficulty, hours FROM courses WHERE course_id = ?;`
  try {
      
      let [results, fields] = await db.query(sqlQuery, [course_id])
      let reviews = await getReviews(course_id)
      results[0]['reviews'] = reviews
      return results
  } catch (err) {
      console.log(err)
      throw err
  }
}

// Function to update Course once a review has been posted with the new overall rating, difficulty and number of hours
export async function updateCourse(values = {}) {
  let params = []
  params.push(values['rating'])
  params.push(values['difficulty'])
  params.push(values['hours'])
  params.push(values['course_id'])

  const sqlQuery = `UPDATE courses SET rating = ?, difficulty = ?, hours = ? WHERE course_id = ?;`
  
  try {  
      const [results, fields] = await db.query(sqlQuery, params)
      return results
  } catch (err) {
      console.log(err)
      throw err
  }
}