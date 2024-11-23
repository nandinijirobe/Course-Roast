import React, { useEffect, useState } from "react";
import Review from './Review'
import styles from './ReviewsDisplay.module.css';
 
export default function ReviewsDisplay() {
    return (
        <div>
           <Review overallRating = {1} semester = "Fall" year = {2021} grade = "A" difficulty = {4.5} hoursPerWeek = {8} comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo orci vitae mauris fringilla ullamcorper. Sed volutpat in purus quis mattis. In semper ipsum viverra orci pharetra lacinia. In porttitor ultricies leo id faucibus. Nullam ut convallis odio, ut dignissim enim. Aliquam nisi erat, pellentesque a imperdiet ac, accumsan a."/>
           <Review overallRating = {3} semester = "Spring" year = {2022} grade = "B" difficulty = {3} hoursPerWeek = {9} comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo orci vitae mauris fringilla ullamcorper. Sed volutpat in purus quis mattis. In semper ipsum viverra orci pharetra lacinia. In porttitor ultricies leo id faucibus. Nullam ut convallis odio, ut dignissim enim. Aliquam nisi erat, pellentesque a imperdiet ac, accumsan a."/>
           <Review overallRating = {5} semester = "Summer" year = {2023} grade = "C" difficulty = {1} hoursPerWeek = {10} comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo orci vitae mauris fringilla ullamcorper. Sed volutpat in purus quis mattis. In semper ipsum viverra orci pharetra lacinia. In porttitor ultricies leo id faucibus. Nullam ut convallis odio, ut dignissim enim. Aliquam nisi erat, pellentesque a imperdiet ac, accumsan a."/>
    </div>
    );
}