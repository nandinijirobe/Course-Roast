import db from '../config/db.js'
// Review Queries

/**
 * @route GET /courses
 * @desc Fetch all review summaries listed in the database + search by query params

 * @inputExample  -- GET http://localhost:5173/reviews?q=CS111
 * @outputExample -- next comment block
{
  "status": "success",
  "data": [
    {
      "review_id": 1,
      "course_id": 1,
      "overall_rating": 0,
      "technical": 5,
      "creative": 3,
      "theory": 3,
      "work_hrs": 8,
      "grade_earned": "B",
      "semester": "Fall",
      "year": 2024,
      "prof_id": 4
    }
  ]
}
*/
export async function getAllReviews (query = {}) {
    let sqlQuery = ""
    let sqlParams = []
    if (!query.q) {
      sqlQuery = `SELECT * FROM reviews;`
    }
    else {
      sqlParams.push(`%${query.q}%`)
      sqlParams.push(`%${query.q}%`)
      sqlQuery = `SELECT * FROM reviews WHERE course_id LIKE ?;`
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
 * @route GET /reviews/sort
 * @desc Fetch all review summaries listed in the database in SORTED order

 * @inputExample  -- GET http://localhost:5173/courses/sort?%2Boverall_rating,+grade_earned
    NOTE : %2B is the encoding for a + because + is interpreted as a space by the browser
    sort by overall_rating, grade_earned
 * @outputExample -- next comment block
{
  "status": "success",
  "data": [
    {
      "review_id": 1,
      "course_id": 1,
      "overall_rating": 0,
      "technical": 5,
      "creative": 3,
      "theory": 3,
      "work_hrs": 8,
      "grade_earned": "B",
      "semester": "Fall",
      "year": 2024,
      "prof_id": 4
    }
  ]
}
*/
export async function sortAllCourses (query = {}) {
    const sortcols = query.q.split(",")
    let orderParams = []
    const validCols = ['overall_rating', 'technical', 'creative', 'theory', 'semester', 'year']

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
    
    const sqlQuery = `SELECT * FROM reviews ORDER BY ${orderParams};`
    try {
        const [results, fields] = await db.query(sqlQuery)
        return results
    } catch (err) {
        console.log(err)
        throw err
    }
}


/**
 * @route GET /reviews/filter
 * @desc Fetch all reviews summaries listed in the database in SORTED order

 * @inputExample  -- GET http://localhost:3000/reviews/filter?overall_rating=4
    filter by overall_rating
 * @outputExample -- next comment block (not exact for this input. input is exhaustive to show all possible filter conditions)
{
  "status": "success",
  "data": [
    
  ]
}
*/

export async function filterCourses (filters = {}) {
    console.log(filters)
    let sqlQuery = ""
    let sqlParams = []
    let paramValues = []
    
    if ('overall_rating' in filters) {
      const ratingParams = filters.rating.split('-')
      sqlParams.push("overall_rating = ?")
      paramValues.push(parseInt(ratingParams[0]))
      // paramValues.push(parseInt(ratingParams[1]))
    }
  
    if ('technical' in filters) {
      const difficultyParams = filters.difficulty.split('-')
      sqlParams.push("technical = ?")
      paramValues.push(parseInt(difficultyParams[0]))
      // paramValues.push(parseInt(difficultyParams[1]))
    }

    if ('creative' in filters) {
        const difficultyParams = filters.difficulty.split('-')
        sqlParams.push("creative = ?")
        paramValues.push(parseInt(difficultyParams[0]))
        // paramValues.push(parseInt(difficultyParams[1]))
    }

    if ('semester' in filters) {
        const difficultyParams = filters.difficulty.split('-')
        sqlParams.push("semester = ?")
        paramValues.push(parseInt(difficultyParams[0]))
        // paramValues.push(parseInt(difficultyParams[1]))
    }

    if ('year' in filters) {
        const difficultyParams = filters.difficulty.split('-')
        sqlParams.push("year = ?")
        paramValues.push(parseInt(difficultyParams[0]))
        // paramValues.push(parseInt(difficultyParams[1]))
    }
    
    if ('prof_id' in filters) {
        const difficultyParams = filters.difficulty.split('-')
        sqlParams.push("prof_id = ?")
        paramValues.push(parseInt(difficultyParams[0]))
        // paramValues.push(parseInt(difficultyParams[1]))
    }
  
    sqlParams = sqlParams.length > 1 ? sqlParams.join(' AND ') : sqlParams
  
    sqlQuery = 'SELECT * FROM reviews WHERE ' + sqlParams + ";"
    
    try {
        const [results, fields] = await db.query(sqlQuery, paramValues)
        return results
    } catch (err) {
        console.log(err)
        throw err
    }
  }


// Function to update Review once a review has been posted with the new course_id, overall rating, technical, creative, theory, work_hrs, grade_earned and prof_id
export async function updateReview(values = {}) {
    let params = []
    params.push(values['course_id'])
    params.push(values['overall_rating'])
    params.push(values['technical'])
    params.push(values['creative'])
    params.push(values['theory'])
    params.push(values['work_hrs'])
    params.push(values['grade_earned'])
    params.push(values['prof_id'])
    params.push(values['review_id'])
  
    const sqlQuery = `UPDATE reviews SET course_id = ?, overall rating = ?, technical = ?, creative = ?, theory = ?, work_hrs = ?, grade_earned = ?, prof_id = ? WHERE review_id = ?;`
    
    try {  
        const [results, fields] = await db.query(sqlQuery, params)
        return results
    } catch (err) {
        console.log(err)
        throw err
    }
}