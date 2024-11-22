import styles from './Dashboard.module.css';
import React from 'react';
import CourseTiles from './components/TilesDisplay'
import Logo from './components/Logo'
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


export default function Dashboard () {
    return(
        <>
            <Logo/>

            <div className={styles["container"]}>
                <div className={styles["pageTitle"]}>
                    <h1>Dashboard</h1>
                </div>  

                <div className={styles["search-filter-container"]}>
                    <input 
                        type={styles["text"]} 
                        className={styles["search-bar"]} 
                        placeholder={styles["Search" ]}
                    />
                    <button className={styles["search-button"]}><FaSearch className={styles["search-icon"]}/></button>
                    <button className={styles["filter-button"]}><FaFilter className={styles["filter-icon"]}/>Filter</button>
                    <button className={styles["sortBy-button"]}><FaSort className={styles["sort-icon"]}/> Sort</button>
                </div>

            </div>

            <CourseTiles/>
        </>
    )
}