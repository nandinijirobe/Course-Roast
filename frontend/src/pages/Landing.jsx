import './Landing.css';

import React from 'react';
import './Landing.css'; // Optional: If you prefer to style using an external CSS file

export default function Landing(){
    return (
        <>
            <div className="logo"><span className="logo-course">course</span> <span className="logo-roast">roast</span>☕️</div>

            <div className="headline">
                the <span className="highlight realest">realest</span><br />
                <span className="highlight course">course review</span> <span className="highlight review">website</span>
            </div>

            <div className="subtitle">
                a one stop dashboard to view anonymous <br />feedback for all cs classes<br />
                <span className="sub-subtitle">for students, from students </span>
            </div>

            <div className="dashboard-btn-location">
                <a href = "./dashboard">
                    <button className="dashboard-btn">dashboard</button>
                </a>    
            </div>
            
            <div className="footer">made w &lt;3</div>
        
        </>

    );
}
