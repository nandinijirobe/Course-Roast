import styles from './Dashboard.module.css';
import React, {useState, useEffect} from 'react';
import Logo from './components/Logo'
import Tile from './components/Tile';
import Popup from "reactjs-popup"; // Import reactjs-popup
import "reactjs-popup/dist/index.css"; // Popup styles
import { FaSort } from "react-icons/fa";
import { FaFilter } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";


export default function Dashboard () {

    const [courseData, setCourseData] = useState([])
    // Popup status for Filter
    const [isPopupOpen, setIsPopupOpen] = useState(false); // state to control popup visibility, by default false until click
    // State for Course Type Checkboxes
    const [isRequiredChecked, setIsRequiredChecked] = useState(false);
    const [isTechnicalChecked, setIsTechnicalChecked] = useState(false);
    // Popup status for Sort
    const [isPopupOpen2, setIsPopupOpen2] = useState(false); 
    const [searchTerm, setSearchTerm] = useState("");

    const [filterLevels, setFilterLevels] = useState(
        {
            100 : false,
            200 : false,
            300 : false,
            400 : false,
        }
      );

      const [sortCols, setSortCols] = useState(
        {
            level : 'none',
            title : 'none',
            code : 'none',
            rating : 'none',
            difficulty : 'none'
        }
      );

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen); // to toggle the state each time setIsPopupOpen function
    };
    
    const togglePopup2 = () => {
        setIsPopupOpen2(!isPopupOpen2); 
    };
 
     // Handlers for Checkboxes
     const handleRequiredChange = () => {
         setIsRequiredChecked(!isRequiredChecked);
         if (!isRequiredChecked) setIsTechnicalChecked(false); // Uncheck "Technical" when "Required" is checked
     };
 
     const handleTechnicalChange = () => {
         setIsTechnicalChecked(!isTechnicalChecked);
         if (!isTechnicalChecked) setIsRequiredChecked(false); // Uncheck "Required" when "Technical" is checked     
     };

     const handleFilterLevels = (e) => {
        const { name, value } = e.target;
        setFilterLevels((prev) => ({
            ...prev, 
            [name]: !(filterLevels[name])
        }));
    }

    const handleSortCols = (e) => {
        const { id, value } = e.target;
        setSortCols((prev) => ({
            ...prev, 
            [id]: value
        }));
    }

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:3000/courses?q=${searchTerm}`, {
                method : 'GET'
            })
            if (!response.ok) {
                throw new Error('Error in fetching Data')
            }
            const res = await response.json()
            setCourseData(res.data)
           
        } catch (err) {
            console.log(err)
        }

    }

    const handleSort = async () => {
        let sort = []

        for (const col in sortCols) {
            if (sortCols[col] == 'ascending') {
                sort.push(`%2B${col}`)
            }
            else if (sortCols[col] == 'descending') {
                sort.push(`-${col}`)
            }
        }

        sort = sort.join()

        let fetchURL = `http://localhost:3000/courses/sort?q=${sort}`

        try {
            const response = await fetch(fetchURL, {
                method : 'GET'
            })
            if (!response.ok) {
                throw new Error('Error in fetching Data')
            }
            const res = await response.json()
            setCourseData(res.data)
           
        } catch (err) {
            console.log(err)
        }

    }

    const handleFilter = async () => {
        let filters = []
        let filterclasses = []
        // Check for whether either required or technical have been checked
        if (isRequiredChecked) {
            filters.push("type=required")
        }
        else if (isTechnicalChecked) {
            filters.push("type=technical")
        }

        for (const level in filterLevels) {
            if (filterLevels[level]) {
                filterclasses.push(level)
            }
        }

        filterclasses = filterclasses.join()
        if (filterclasses.length > 0) {
            filters.push(`level=${filterclasses}`)
        }

        filters = filters.join("&")

        let filterURL = `http://localhost:3000/courses/filter?${filters}`

        try {
            const response = await fetch(filterURL, {
                method : 'GET'
            })
            if (!response.ok) {
                throw new Error('Error in fetching Data')
            }
            const res = await response.json()
            setCourseData(res.data)
           
        } catch (err) {
            console.log(err)
        }
    }

    const getCourseData = async () => {
        try {
            const response = await fetch('http://localhost:3000/courses', {
                method : 'GET'
            })
            if (!response.ok) {
                throw new Error('Error in fetching Data')
            }
            const res = await response.json()
            setCourseData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect (() => {
        getCourseData()
    }, [])

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
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className={styles["search-button"]} onClick={handleSearch}><FaSearch className={styles["search-icon"]}/></button>
                    <button className={styles["filter-button"]} onClick={togglePopup}><FaFilter className={styles["filter-icon"]}/>Filter</button>
                    <button className={styles["sortBy-button"]} onClick={togglePopup2}><FaSort className={styles["sort-icon"]}/> Sort</button>
                </div>

            </div>

            <div className= {styles["all-tiles"]}>
                {/* TODO round the rating accordingly to .1 decimal point */}
                {courseData.map(course => (
                    <Tile path={`/course/${course.course_id}`} key={course.course_id} courseCode={course.code} courseName={course.title} courseType={course.type} courseOverallRating={course.rating} />
                ))}
            </div>

            {/* Filter Popup */}
            <Popup open={isPopupOpen} onClose={() => setIsPopupOpen(false)} modal>
            <div className={styles["popup-content"]}>
                {/* Header */}
                <h2>Filter</h2>

                {/* Class-Level Section */}
                <div className={styles["checkbox-group"]}>
                    <h3>Class-Level</h3>
                    <label>
                        <input type="checkbox" name = "100" onChange={handleFilterLevels} checked = {filterLevels[100]} /> 100-level
                    </label>
                    <label>
                        <input type="checkbox" name = "200" onChange={handleFilterLevels} checked = {filterLevels[200]} /> 200-level
                     </label>
                     <label>
                        <input type="checkbox" name = "300" onChange={handleFilterLevels} checked = {filterLevels[300]} /> 300-level
                    </label>
                    <label>
                        <input type="checkbox" name = "400" onChange={handleFilterLevels} checked = {filterLevels[400]} /> 400-level
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
                            setIsPopupOpen(false);
                            handleFilter()
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
                    <div className={styles["categories-and-selects"]}>
                        <div className={styles["sort-categories"]}>
                            <div className="category-name">Level</div>
                            <div className="category-name">Class Code</div>
                            <div className="category-name">Class Title</div>
                            <div className="category-name">Rating</div>
                            <div className="category-name">Difficulty</div>
                        </div>
                        <div className={styles["all-selects"]}>
                            <select id="level" className={styles["dropdown"]} onChange={handleSortCols}>
                                <option value="ascending">Ascending</option>
                                <option value="none">None</option>
                                <option value="descending">Descending</option>
                            </select>
        
                            <select id="code" className={styles["dropdown"]} onChange={handleSortCols}>
                                <option value="ascending">Ascending</option>
                                <option value="none">None</option>
                                <option value="descending">Descending</option>
                            </select>
                     
                            <select id="title" className={styles["dropdown"]} onChange={handleSortCols}>
                                <option value="ascending">Ascending</option>
                                <option value="none">None</option>
                                <option value="descending">Descending</option>
                            </select>
                      
                            <select id="rating" className={styles["dropdown"]} onChange={handleSortCols}>
                                <option value="ascending">Ascending</option>
                                <option value="none">None</option>
                                <option value="descending">Descending</option>
                            </select>
                        
                            <select id="difficulty" className={styles["dropdown"]} onChange={handleSortCols}>
                                <option value="ascending">Ascending</option>
                                <option value="none">None</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
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
                            setIsPopupOpen2(false);
                            handleSort()
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