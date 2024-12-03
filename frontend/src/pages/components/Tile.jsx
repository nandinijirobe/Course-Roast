import React from "react";
import styles from './Tile.module.css';
import { Link } from 'react-router-dom';

export default function Tile(props) {

    return (
        <Link to={props.path} style={{textDecoration : 'none'}}>
        <div className={`${styles['CourseContainer']} 
                        ${props.courseOverallRating >= 4 ?
                          styles['high-rated']: props.courseOverallRating >= 3.5 ? 
                          styles['mid-rated']: styles['low-rated']}`}
            style={{ cursor: 'pointer' }}
        >

                <div className={styles["cardLeft"]}>
                    <div className={styles["courseCode"]}>{props.courseCode}</div>
                    <div className={styles["courseName"]}>{props.courseName}</div>
                    <div className={styles["courseType"]}>{props.courseType}</div>
                </div>
                <div className={styles["cardRight"]}>
                    <div className={styles["courseRating"]}>{props.courseOverallRating}</div>
                </div>

            
        </div>
        </Link>
    );
}