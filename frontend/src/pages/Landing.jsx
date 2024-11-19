import React from 'react';
import Logo from './components/Logo'
import styles from './Landing.module.css'; // Optional: If you prefer to style using an external CSS file

export default function Landing(){
    return (
        <div className={styles['body']}>
           <Logo/>
           <div className={styles['landing-contents']}>
           <div className={styles['headline']}>
                the <span className={`${styles['highlight']} ${styles['realest']}`}>realest</span><br />
                <span className={`${styles['highlight']} ${styles['course']}`}>course review</span> 
                <span className={`${styles['highlight']} ${styles['review']}`}>website</span>
            </div>

            <div className={styles["subtitle"]}>
                a one stop dashboard to view anonymous <br />feedback for all cs classes<br />
                <span className={styles["sub-subtitle"]}>for students, from students </span>
            </div>

            <div className={styles["dashboard-btn-location"]}>
                <a href = "./dashboard">
                    <button className={styles["dashboard-btn"]}>dashboard</button>
                </a>    
            </div>
            
            </div>
            <div className={styles["footer"]}>made w &lt;3</div>
        
        </div>

    );
}
