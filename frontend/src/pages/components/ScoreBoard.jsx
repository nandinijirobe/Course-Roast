import React from "react";
import styles from './ScoreBoard.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function ScoreBoard(props) {
    return (
        <div className = {styles["score-board-container"]}>
            <div className = {styles["hrs-week-title"]}>Hours/Week:</div>
            <div className = {styles["hrs-week-value"]}>{10.2}</div>
            <div className = {styles["scores"]}>
                <div>Avg Difficulty:</div>
                <progress className={styles.progressBar} value={4} max={5} />
                <div>Avg Technical Score:</div>
                <progress className={styles.progressBar} value={1} max={5} />
                <div>Avg Creativity Score:</div>
                <progress className={styles.progressBar} value={4} max={5} />
                <div>Avg Theoretical Score:</div>
                <progress className={styles.progressBar} value={3} max={5} />
            </div>
        </div>

    );
}