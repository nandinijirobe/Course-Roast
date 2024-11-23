import React from "react";
import styles from './Review.module.css';

export default function Tile(props) {
    return (
        <div className={`${styles['review-container']} 
                         ${props.overallRating >= 4 ? styles['high-rated-border']: 
                          props.overallRating >= 2 ? styles['mid-rated-border']: 
                          styles['low-rated-border']}`}>

            <div className={`${styles["cardLeft"]}
                             ${props.overallRating >= 4 ? styles['high-rated-bg']: 
                               props.overallRating >= 2 ? styles['mid-rated-bg']: 
                               styles['low-rated-bg']}`}> {/*card-left*/}
                <div className={styles["sem-year-text"]}>{props.semester} {props.year}</div> 
            </div>
            

            <div className={styles["cardRight"]}>
                <div className={styles["comment-grade"]}> {/* card-middle*/}
                    <div className = {styles["grade"]}>Grade Received: {props.grade}</div>
                    <div className = {styles["comment"]}>{props.comment}</div>
                </div>

                <div className={styles["stats"]}> {/* card-right*/}
                        <div className={styles["rating"]}>Rating: {props.overallRating}/5</div>
                        <div className={styles["difficulty"]}>Difficulty: {props.difficulty}/5</div>
                        <div className={styles["hours-week"]}>Hours/Week:{props.hoursPerWeek}/10</div>
                </div>
            </div>

        </div>
    );
}