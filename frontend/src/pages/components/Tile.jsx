import React from "react";
import styles from './Tile.module.css';
import { useNavigate } from 'react-router-dom';

export default function Tile(props) {
    const navigate = useNavigate();

    const handleClick = (course_id) => {
        // Redirect to a dynamic course page
        // Should be updated to work with any course ('/CS111', '/CS251')
        // When ready to test use: '/${courseName}
        navigate(`/course/${course_id}`);
      };

    return (
        <div className={`${styles['CourseContainer']} 
                        ${props.courseOverallRating >= 4 ?
                          styles['high-rated']: props.courseOverallRating >= 2 ? 
                          styles['mid-rated']: styles['low-rated']}`}
            onClick={handleClick(props.course_id)}
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
    );
}