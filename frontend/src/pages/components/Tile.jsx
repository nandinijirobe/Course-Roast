import React from "react";

export default function Tile(props) {
    return (
        <div className="cardContainer">
            <div className="cardLeft">
                <div>{props.courseCode}</div>
                <div>{props.courseName}</div>
                <div>{props.courseType}</div>
            </div>
            <div className="cardRight">{props.courseOverallRating}</div>
        </div>
    );
}