import React from "react";
import styles from './Logo.module.css';
import { FaGithub } from "react-icons/fa"; // Import GitHub logo icon from react-icons

export default function Logo() {
    return (
        <div className={styles["header-container"]}>
            {/* Logo */}
            <div className={styles["logo"]}>
                <span className={styles["logo-course"]}>course</span>
                <span className={styles["logo-roast"]}>roast</span>☕️
            </div>

            {/* GitHub Icon */}
            <a className={styles["github-icon"]}
                href="https://github.com/nandinijirobe/Course-Roast.git" // Replace with your GitHub repository URL
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
    );
}