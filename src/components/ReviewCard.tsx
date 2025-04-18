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
    const starValue = index + 1;
    if (rating >= starValue) {
      return 'filled';
    } else if (rating >= starValue - 0.5) {
      return 'half';
    }
    return 'empty';
  });

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.username}>{username}</h3>
        <div className={styles.starContainer}>
          {stars.map((type, index) => (
            <span 
              key={index} 
              className={`${styles.star} ${styles[type]}`}
            >
              {type === 'half' ? '★' : '★'}
            </span>
          ))}
        </div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

export default ReviewCard;