import React from "react";
import styles from './Tile.module.css';

export default function Tile(props) {
    return (
        <div className={`${styles['CourseContainer']} 
                        ${props.courseOverallRating >= 4 ?
                          styles['high-rated']: props.courseOverallRating >= 2 ? 
                          styles['mid-rated']: styles['low-rated']}`}>
            <div className={styles["cardLeft"]}>
                <div className={styles["courseCode"]}>{props.courseCode}</div>
                <div className={styles["courseName"]}>{props.courseName}</div>
                <div className={styles["courseType"]}>{props.courseType}</div>
            </div>
            <div className={styles["cardRight"]}>
                <div className={styles["courseRating"]}>{props.courseOverallRating}</div>
            </div>
        </div>


    );
}