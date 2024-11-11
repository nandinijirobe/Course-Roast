import React, { useEffect, useState } from "react";
import Tile from './Tile'
 
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
        <div>
        <tbody>
                <tr>
                    <td><Tile courseCode = "CS 111" courseName = "Program Design I" courseType = "Required Elective" courseOverallRating= {4.9}/></td>
                    <td><Tile courseCode = "CS 112" courseName = "Program Design II" courseType = "Required Elective" courseOverallRating= {4.5}/></td>
                    <td><Tile courseCode = "CS 151" courseName = "Mathematical Foundations of Computing" courseType = "Required Elective" courseOverallRating= {3.7}/></td>
                </tr>
                <tr>
                    <td><Tile courseCode = "CS 211" courseName = "Programming Practicum" courseType = "Technical Elective" courseOverallRating= {2.2}/></td>
                    <td><Tile courseCode = "CS 251" courseName = "Data Structures" courseType = "Technical Elective" courseOverallRating= {1.1}/></td>
                    <td><Tile courseCode = "CS 477" courseName = "Public Policy, Legal, and Ethical Issues in Computing, Privacy, and Security" courseType = "Technical Elective" courseOverallRating= {0.5}/></td>
                </tr>
        </tbody>
    </div>
    );
}