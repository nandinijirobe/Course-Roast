import './Dashboard.css';
import React from 'react';
import CourseTiles from './components/TilesDisplay'
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export default function Dashboard () {
    return(
        <>
            <div className="logo"><span className="logo-course">course</span> <span className="logo-roast">roast</span>☕️</div>

                <div className="container">
                    <div className="pageTitle">
                        <h1>Dashboard</h1>
                    </div>  

                    <div className="search-filter-container">
                        <input 
                            type="text" 
                            className="search-bar" 
                            placeholder="Search" 
                        />
                        <button className="search-button"><FaSearch className="search-icon"/></button>
                        <button className="filter-button"><FaFilter className="filter-icon"/>Filter</button>
                        <button className="sortBy-button"><FaSort className="sort-icon"/> Sort</button>
                    </div>

                </div>

                <CourseTiles/>
        </>
    )
}