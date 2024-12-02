import React from 'react'; 
import styles from './ReviewPopup.module.css'; 

export default function ReviewPopup({ isVisible, onClose, onSubmit }) {
    // Destructure props to access `isVisible`, `onClose`, and `onSubmit`.

    if (!isVisible) return null;
    // If `isVisible` is false, the component returns `null` and does not render anything.

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create an object with the form data, parsing numeric values as necessary.
        const formData = {
            comment: e.target.comment.value, // Get the value from the "comment" textarea. prev review
            rating: parseFloat(e.target.rating.value), // Convert the rating to a float.
            difficulty: parseFloat(e.target.difficulty.value), // Convert difficulty to a float.
            technical: parseFloat(e.target.technical.value), // Convert technical score to a float.
            theory: parseFloat(e.target.theory.value), // Convert theory score to a float.
            creative: parseFloat(e.target.creative.value), // Convert creativity score to a float.
            hours: parseInt(e.target.hours.value, 10), // Convert hours to an integer.
            semester: e.target.semester.value, // Get the selected semester value.
            year: parseInt(e.target.year.value, 10), // Convert the year to an integer.
            grade_earned: e.target.grade_earned.value, // Get the selected grade earned.
        };

        onSubmit(formData);
        // Call the `onSubmit` callback function (passed as a prop) and pass the form data.

        onClose();
        // Call the `onClose` callback function (passed as a prop) to close the popup.
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                {/* A container for the popup content, styled with CSS module classes. */}
                <button className={styles.closeBtn} onClick={onClose}>✖</button>
                {/* A button to close the popup by calling the `onClose` callback. */}
                
                <form onSubmit={handleSubmit}>
                    {/* A form that triggers the `handleSubmit` function on submission. */}

                    <textarea 
                        name="comment" 
                        placeholder="Enter your comment" 
                        required 
                        className={styles.textarea} 
                    />
                    {/* A textarea for the user to enter their comment. It is required and styled. */}

                    <input
                        type="number"
                        step="0.1"
                        name="rating"
                        placeholder="Rating (e.g., 3.9)"
                        required
                        className={styles.input}
                    />
                    {/* An input field for rating, accepts decimal values with step 0.1. */}

                    <input
                        type="number"
                        step="0.1"
                        name="difficulty"
                        placeholder="Difficulty (e.g., 3.5)"
                        required
                        className={styles.input}
                    />
                    {/* An input field for difficulty, accepts decimal values with step 0.1. */}

                    <input
                        type="number"
                        step="0.1"
                        name="technical"
                        placeholder="Technical (e.g., 4)"
                        required
                        className={styles.input}
                    />
                    {/* An input field for technical score, accepts decimal values with step 0.1. */}

                    <input
                        type="number"
                        step="0.1"
                        name="theory"
                        placeholder="Theory (e.g., 1)"
                        required
                        className={styles.input}
                    />
                    {/* An input field for theory score, accepts decimal values with step 0.1. */}

                    <input
                        type="number"
                        step="0.1"
                        name="creative"
                        placeholder="Creative (e.g., 2)"
                        required
                        className={styles.input}
                    />
                    {/* An input field for creativity score, accepts decimal values with step 0.1. */}

                    <input
                        type="number"
                        name="hours"
                        placeholder="Hours (e.g., 9)"
                        required
                        className={styles.input}
                    />
                    {/* An input field for hours spent, accepts integer values. */}

                    <select name="semester" required className={styles.select}>
                        {/* A dropdown menu for selecting the semester. */}
                        <option value="" disabled selected>Select Semester</option>
                        {/* A placeholder option for the dropdown menu. */}
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Fall">Fall</option>
                        {/* Options for semesters. */}
                    </select>

                    <input
                        type="number"
                        name="year"
                        placeholder="Year (e.g., 2022)"
                        required
                        className={styles.input}
                    />
                    {/* An input field for the year, accepts integer values. */}

                    <select name="grade_earned" required className={styles.select}>
                        {/* A dropdown menu for selecting the grade earned. */}
                        <option value="" disabled selected>Select Grade</option>
                        {/* A placeholder option for the dropdown menu. */}
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="F">F</option>
                        {/* Options for grades. */}
                    </select>

                    <button type="submit" className={styles.submitBtn}>Submit Review</button>
                    {/* A submit button that submits the form and triggers `handleSubmit`. */}
                </form>
            </div>
        </div>
    );
}
