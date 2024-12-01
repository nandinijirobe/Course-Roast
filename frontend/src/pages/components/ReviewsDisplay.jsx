import React, { useEffect, useState } from "react";
import Review from './Review'
import styles from './ReviewsDisplay.module.css';
 
export default function ReviewsDisplay(props) {
    return (
        <div>
            {props.reviews.map(review => (
                <Review key = {review.review_id} overallRating = {review.rating} semester = {review.semester} year = {review.year} grade = {review.grade_earned} difficulty = {review.difficulty} hoursPerWeek = {review.hours} comment = {review.comment}/>

            ))}
        </div>
    );
}