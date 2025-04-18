import React, { useState } from 'react';
import styles from './FeedbackForm.module.css';

const FeedbackForm: React.FC = () => {
	const [username, setUsername] = useState('');
	const [rating, setRating] = useState(0);
	const [comment, setComment] = useState('');
	const [charCount, setCharCount] = useState(0);

	const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		const text = e.target.value;
		setComment(text);
		setCharCount(text.length);
	};

	const handleStarClick = (starValue: number, isHalf: boolean) => {
		setRating(isHalf ? starValue - 0.5 : starValue);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Create the feedback object
		const feedback = {
			username,
			rating,
			comment
		};

		console.log('Submitting feedback:', feedback);

		// Reset form after submission
		setUsername('');
		setRating(0);
		setComment('');
		setCharCount(0);

		// Here you would typically send the data to your backend
		alert('Thank you for your feedback!');
	};

	return (
		<div className={styles.formContainer}>
			<form className={styles.form} onSubmit={handleSubmit}>
				<h1 className={styles.formTitle}>SERVICE FEEDBACK</h1>

				<div className={styles.formGroup}>
					<label htmlFor="username" className={styles.label}>Username</label>
					<input
						type="text"
						id="username"
						className={styles.input}
						placeholder="Your Username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div>

				<div className={styles.formGroup}>
					<label className={styles.label}>How did you like our service?</label>
					<div className={styles.starRating}>
						{[1, 2, 3, 4, 5].map((star) => (
							<div key={star} className={styles.starContainer}>
								<span
									className={`${styles.star} ${rating >= star ? styles.filled : ''}`}
									onClick={() => handleStarClick(star, false)}
								>
									★
								</span>
								<span
									className={`${styles.star} ${rating >= star - 0.5 ? styles.filled : ''} ${styles.half}`}
									onClick={() => handleStarClick(star, true)}
								>
									★
								</span>
							</div>
						))}
					</div>
				</div>

				<div className={styles.formGroup}>
					<label htmlFor="comments" className={styles.label}>Comments</label>
					<textarea
						id="comments"
						className={styles.textarea}
						placeholder="Tell us what you liked or what we can improve..."
						value={comment}
						onChange={handleCommentChange}
						maxLength={200}
					/>
					<div className={styles.charCount}>{charCount}/200</div>
				</div>

				<button type="submit" className={styles.submitButton}>SUBMIT</button>
			</form>
		</div>
	);
};

export default FeedbackForm;