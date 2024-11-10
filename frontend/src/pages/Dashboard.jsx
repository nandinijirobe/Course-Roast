import './Dashboard.css';
import React from 'react';
import CourseTiles from './components/TilesDisplay'

export default function Dashboard () {
    return(
        <>
            <h1>this is the dashboard page</h1>  
            <CourseTiles/>
        </>
    )
}