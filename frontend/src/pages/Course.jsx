import styles from './Course.module.css';
import React from 'react';
import ReviewsDisplay from './components/ReviewsDisplay'
import Logo from './components/Logo'


export default function Course () {
    return(
        <>
            <Logo/>
            this is the course page
            <ReviewsDisplay/>
        </>
    )
}