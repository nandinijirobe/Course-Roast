import React, { useEffect, useState } from "react";
import Tile from './Tile'
import styles from './TilesDisplay.module.css';
 
export default function CourseTiles() {

    const [courseData, setCourseData] = useState([])

    const getCourseData = async () => {
        try {
            const response = await fetch('http://localhost:3000/courses', {
                method : 'GET'
            })
            if (!response.ok) {
                throw new Error('Error in fetching Data')
            }
            const res = await response.json()
            console.log(res)
            setCourseData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect (() => {
        getCourseData()
    }, [])

    return (
        <div className= {styles["all-tiles"]}>

            {/* TODO round the rating accordingly to .1 decimal point */}
            {courseData.map(course => (
                <Tile path={`/course/${course.course_id}`} key={course.course_id} courseCode={course.code} courseName={course.title} courseType={course.type} courseOverallRating={course.rating} />
            ))}
        </div>
    );
}