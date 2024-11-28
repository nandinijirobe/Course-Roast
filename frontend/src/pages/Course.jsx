import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Course.module.css';
import React from 'react';
import ReviewsDisplay from './components/ReviewsDisplay'
import Logo from './components/Logo'
import ScoreBoard from './components/ScoreBoard';
import RatingGraph from './components/RatingGraph';


export default function Course (props) {
    const { id } = useParams();

    const [courseDetails, setCourseDetails] = useState([])

    const getCourseData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/courses/${id}`, {
                method : 'GET'
            })
            if (!response.ok) {
                throw new Error('Error in fetching Data')
            }
            const res = await response.json()
            setCourseDetails(res.data[0])
           
        } catch (err) {
            console.log(err)
        }
    }

    useEffect (() => {
        getCourseData()
    }, [])

    return(
        <>
            <Logo/>
            <div className = {styles["title-and-btn"]}>
                <div className = {styles["course-title"]}>{courseDetails.code}: {courseDetails.title}</div>
                <button className = {styles["spill-beans-btn"]}>Spill the Beans! 🫘</button>
            </div>
            <div className = {styles["course-stats"]}> 
                <ScoreBoard hours = {courseDetails.hours} difficulty = {courseDetails.difficulty}/>
                <RatingGraph/>
            </div>
            <ReviewsDisplay reviews = {courseDetails.reviews}/>
        </>
    )
}