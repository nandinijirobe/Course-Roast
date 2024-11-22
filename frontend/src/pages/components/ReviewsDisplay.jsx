import React, { useEffect, useState } from "react";
import Review from './Review'
import styles from './ReviewsDisplay.module.css';
 
export default function ReviewsDisplay() {
    return (
        <div>
        <tbody>
                <td><Review overallRating = {4} semester = "" year = {2021} grade = "A" difficulty = {4.5} hoursPerWeek = {13} comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo orci vitae mauris fringilla ullamcorper. Sed volutpat in purus quis mattis. In semper ipsum viverra orci pharetra lacinia. In porttitor ultricies leo id faucibus. Nullam ut convallis odio, ut dignissim enim. Aliquam nisi erat, pellentesque a imperdiet ac, accumsan a."/></td>
                <td><Review overallRating = {4} semester = "" year = {2022} grade = "B" difficulty = {3} hoursPerWeek = {12} comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo orci vitae mauris fringilla ullamcorper. Sed volutpat in purus quis mattis. In semper ipsum viverra orci pharetra lacinia. In porttitor ultricies leo id faucibus. Nullam ut convallis odio, ut dignissim enim. Aliquam nisi erat, pellentesque a imperdiet ac, accumsan a."/></td>
                <td><Review overallRating = {5} semester = "" year = {2023} grade = "C" difficulty = {1} hoursPerWeek = {10} comment = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo orci vitae mauris fringilla ullamcorper. Sed volutpat in purus quis mattis. In semper ipsum viverra orci pharetra lacinia. In porttitor ultricies leo id faucibus. Nullam ut convallis odio, ut dignissim enim. Aliquam nisi erat, pellentesque a imperdiet ac, accumsan a."/></td>
        </tbody>
    </div>
    );
}