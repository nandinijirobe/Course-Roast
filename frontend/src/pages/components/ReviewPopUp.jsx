import React from 'react';
import styles from './ReviewPopup.module.css';

export default function ReviewPopup({ isVisible, onClose, onSubmit }) {
    if (!isVisible) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const review = e.target.review.value;
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
                    <button type="submit" className={styles.submitBtn}>Submit Review</button>
                </form>
            </div>
        </div>
    );
}
