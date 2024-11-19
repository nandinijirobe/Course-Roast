import React from "react";
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <div className={styles["logo"]}><span className={styles["logo-course"]}>course</span> <span className={styles["logo-roast"]}>roast</span>☕️</div>
    );
}