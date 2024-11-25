import styles from './Dashboard.module.css';
import React, {useState} from 'react';
import CourseTiles from './components/TilesDisplay'
import Logo from './components/Logo'
import Popup from "reactjs-popup"; // Import reactjs-popup
import "reactjs-popup/dist/index.css"; // Popup styles
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


export default function Dashboard () {
    // Popup status for Filter
    const [isPopupOpen, setIsPopupOpen] = useState(false); // state to control popup visibility, by default false until click
    const togglePopup = () => {
        // console.log('Toggle popup called'); // Debugging log
        setIsPopupOpen(!isPopupOpen); // to toggle the state each time setIsPopupOpen function
    };
    // Popup status for Sort
    const [isPopupOpen2, setIsPopupOpen2] = useState(false); 
    const togglePopup2 = () => {
        // console.log('Toggle popup called'); // Debugging log
        setIsPopupOpen2(!isPopupOpen2); 
    };

     // State for Course Type Checkboxes
     const [isRequiredChecked, setIsRequiredChecked] = useState(false);
     const [isTechnicalChecked, setIsTechnicalChecked] = useState(false);
 
     // Handlers for Checkboxes
     const handleRequiredChange = () => {
         setIsRequiredChecked(!isRequiredChecked);
         if (!isRequiredChecked) setIsTechnicalChecked(false); // Uncheck "Technical" when "Required" is checked
     };
 
     const handleTechnicalChange = () => {
         setIsTechnicalChecked(!isTechnicalChecked);
         if (!isTechnicalChecked) setIsRequiredChecked(false); // Uncheck "Required" when "Technical" is checked
     };

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
                    <button className={styles["filter-button"]} onClick={togglePopup}><FaFilter className={styles["filter-icon"]}/>Filter</button>
                    <button className={styles["sortBy-button"]} onClick={togglePopup2}><FaSort className={styles["sort-icon"]}/> Sort</button>
                </div>

            </div>

            <CourseTiles/>

            {/* Filter Popup */}
            <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} modal>
            <div className={styles["popup-content"]}>
                {/* Header */}
                <h2>Filter</h2>

                {/* Class-Level Section */}
                <div className={styles["checkbox-group"]}>
                    <h3>Class-Level</h3>
                    <label>
                        <input type="checkbox" /> 100-level
                    </label>
                    <label>
                        <input type="checkbox" /> 200-level
                     </label>
                     <label>
                        <input type="checkbox" /> 300-level
                    </label>
                </div>

                {/* Course Type Section */}
                <div className={styles["checkbox-group"]}>
                    <h3>Course Type</h3>
                    <label>
                        <input type="checkbox" 
                        checked={isRequiredChecked}
                        onChange={handleRequiredChange}
                        /> Required
                    </label>
                    <label>
                        <input type="checkbox" 
                        checked={isTechnicalChecked}
                        onChange={handleTechnicalChange}
                        /> Technical
                    </label>
                </div>

                {/* Buttons */}
                <div className={styles["button-group"]}>
                    <button
                        className={styles["cancel-button"]}
                        onClick={() => setIsPopupOpen(false)}
                    >
                    Cancel
                    </button>
                    <button
                        className={styles["save-button"]}
                        onClick={() => {
                        // console.log("Filters saved"); // Debugging log
                        setIsPopupOpen(false);
                        }}
                        >
                        Save
                    </button>
                </div>
            </div>
            </Popup>

            {/* Sort Popup */}
            <Popup open={isPopupOpen2} onClose={() => setIsPopupOpen2(false)} modal>
                <div className={styles["popup-content2"]}>
                    <h2>Sort</h2>
                    {/* Class-Level Section */}
                    <div className={styles["checkbox-group2"]}>
                        <label>
                            <input type="checkbox" /> Level
                        </label>
                        <label>
                            <input type="checkbox" /> Class Code
                        </label>
                        <label>
                            <input type="checkbox" /> Class Title
                        </label>
                        <label>
                            <input type="checkbox" /> Credits
                        </label>
                        <label>
                            <input type="checkbox" /> Rating
                        </label>
                        <label>
                            <input type="checkbox" /> Difficulty
                        </label>
                    </div>
                    {/* Buttons */}
                    <div className={styles["button-group2"]}>
                        <button
                            className={styles["cancel-button2"]}
                            onClick={() => setIsPopupOpen2(false)}
                        >
                        Cancel
                        </button>
                        <button
                            className={styles["save-button2"]}
                            onClick={() => {
                            // console.log("Filters saved"); // Debugging log
                            setIsPopupOpen2(false);
                            }}
                        >
                        Save
                        </button>
                    </div>
                </div>
            </Popup>
        </>
    );
}