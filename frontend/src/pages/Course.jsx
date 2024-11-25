import styles from './Course.module.css';
import React from 'react';
import ReviewsDisplay from './components/ReviewsDisplay'
import Logo from './components/Logo'
import ScoreBoard from './components/ScoreBoard';
import RatingGraph from './components/RatingGraph';



export default function Course (props) {
    return(
        <>
            <Logo/>
            <div className = {styles["title-and-btn"]}>
                <div className = {styles["course-title"]}>CS 474: Public Policy, Legal, and Ethical Issues in Computing, Privacy, and Security</div>
                <button className = {styles["spill-beans-btn"]}>Spill the Beans! 🫘</button>
            </div>
            <div className = {styles["course-stats"]}> 
                <ScoreBoard/>
                <RatingGraph/>
            </div>
            <ReviewsDisplay/>
        </>
    )
}