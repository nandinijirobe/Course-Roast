import React from "react";
import Tile from './Tile'

export default function CourseTiles() {
    return (
        <div>
        <tbody>
                <tr>
                    <td><Tile courseCode = "CS 111" courseName = "Program Design I" courseType = "Required" courseOverallRating="4.0"/></td>
                    <td><Tile courseCode = "CS 112" courseName = "Program Design II" courseType = "Required" courseOverallRating="4.0"/></td>
                    <td><Tile courseCode = "CS 151" courseName = "Mathematical Foundations of Computing" courseType = "Required" courseOverallRating="4.0"/></td>
                </tr>
                <tr>
                    <td><Tile courseCode = "CS 111" courseName = "Programming Practicum" courseType = "Technical Elective" courseOverallRating="3.0"/></td>
                    <td><Tile courseCode = "CS 111" courseName = "Data Structures" courseType = "Technical Elective" courseOverallRating="3.0"/></td>
                    <td><Tile courseCode = "CS 111" courseName = "Machine Organization" courseType = "Technical Elective" courseOverallRating="3.0"/></td>
                </tr>
        </tbody>
    </div>
    );
}