import React from "react";
import './Tile.css';

export default function Tile(props) {
    return (
            <div className={`colors ${props.courseOverallRating >= 4 ? "CourseContainer high-rated" : 
                                  props.courseOverallRating >= 2 ? "CourseContainer mid-rated" :"CourseContainer low-rated"}`}>
            <div className="cardLeft">
                <div className="courseCode">{props.courseCode}</div>
                <div className="courseName">{props.courseName}</div>
                <div className="courseType">{props.courseType}</div>
            </div>
            <div className="cardRight">
                <div className="courseRating">{props.courseOverallRating}</div>
            </div>
        </div>


    );
}