import React from 'react';
import styles from './ReviewCard.module.css';

type ReviewCardProps = {
  username: string;
  rating: number;
  comment: string;
};

const ReviewCard: React.FC<ReviewCardProps> = ({ username, rating, comment }) => {
  // Generate an array of 5 stars, filled based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    return index < rating ? 'filled' : 'empty';
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.username}>{username}</h3>
        <div className={styles.starContainer}>
          {stars.map((type, index) => (
            <span 
              key={index} 
              className={`${styles.star} ${type === 'filled' ? styles.filled : styles.empty}`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default ReviewCard;