import React from 'react';
import styles from './ReviewPopup.module.css';

export default function ReviewPopup({ isVisible, onClose, onSubmit }) {
    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = {
            comment : e.target.review.value,
            rating : e.target.rating.value,
            difficulty : e.target.difficulty.value,
            technical : e.target.technical.value,
            theory : e.target.theory.value,
            creative : e.target.creative.value,
            hours : e.target.hours.value,
            semester : e.target.semester.value,
            year : e.target.year.value,
            grade_earned : e.target.grade_earned.value
        }
        onSubmit(review);
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <button className={styles.closeBtn} onClick={onClose}>✖</button>
                <form onSubmit={handleSubmit}>
                    <textarea 
                        name="review" 
                        placeholder="Write your review here..." 
                        required
                        className={styles.textarea}
                    />
                    <textarea 
                        name="rating" 
                        placeholder="Add your rating" 
                        required
                        className={styles.textarea}
                    />
                    <textarea 
                        name="difficulty" 
                        placeholder="Add your difficulty" 
                        required
                        className={styles.textarea}
                    />
                    <textarea 
                    name="technical" 
                    placeholder="Add your technical" 
                    required
                    className={styles.textarea}
                    />
                    <textarea 
                    name="creative" 
                    placeholder="Add your creative" 
                    required
                    className={styles.textarea}
                    />  
                    <textarea 
                    name="theory" 
                    placeholder="Add your theory" 
                    required
                    className={styles.textarea}
                    />
                    <textarea 
                    name="hours" 
                    placeholder="Add your hours" 
                    required
                    className={styles.textarea}
                    />
                    <textarea 
                    name="semester" 
                    placeholder="Add your semester" 
                    required
                    className={styles.textarea}
                    />
                    <textarea 
                        name="year" 
                        placeholder="Add your year" 
                        required
                        className={styles.textarea}
                    />
                    <textarea 
                    name="grade_earned" 
                    placeholder="Add your grade_earned" 
                    required
                    className={styles.textarea}
                    />
                    <button type="submit" className={styles.submitBtn}>Submit Review</button>
                </form>
            </div>
        </div>
    );
}
