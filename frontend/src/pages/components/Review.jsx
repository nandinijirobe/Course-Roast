import React from "react";
import styles from './Review.module.css';

export default function Tile(props) {
    return (
        <div className={`${styles['review-container']} 
                        ${props.overallRating >= 4 ? styles['high-rated']: 
                          props.overallRating >= 2 ? styles['mid-rated']: 
                          styles['low-rated']}`}>

            <div className={styles["sem-year"]}>{props.semester} {props.year}</div>
            <div className={styles["comment-grade"]}>
                <div className = {styles["comment"]}>{props.comment}</div>
                <div className = {styles["grade"]}>{props.grade}</div>
            </div>
            <div className={styles["stats"]}>
                    <div className={styles["rating"]}>{props.overallRating}</div>
                    <div className={styles["difficulty"]}>{props.difficulty}</div>
                    <div className={styles["hours-week"]}>{props.hoursPerWeek}</div>
            </div>
        </div>
    );
}