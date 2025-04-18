
import React from 'react';
import ReviewCard from '../../components/ReviewCard';
import styles from './ExperienceView.module.css';

// Mock data type
type Review = {
  id: string;
  username: string;
  rating: number;
  comment: string;
};

// Sample mock data
const mockReviews: Review[] = [
  {
    id: '1',
    username: 'JohnDoe123',
    rating: 5,
    comment: 'Exceptional service! The team went above and beyond to meet my requirements. I would highly recommend them to anyone looking for professional and timely service.',
  },
  {
    id: '2',
    username: 'TechEnthusiast',
    rating: 4,
    comment: 'Great experience overall. The application is intuitive and responsive. A few minor issues but nothing that affected my workflow significantly.',
  },
  {
    id: '3',
    username: 'DesignLover',
    rating: 5,
    comment: 'The design is sleek and modern. I love how easy it is to navigate through different sections. Definitely one of the best interfaces I have worked with!',
  },
  {
    id: '4',
    username: 'BusyBee',
    rating: 3,
    comment: 'Decent service but room for improvement. Response times could be faster and some features were not as straightforward as I would have liked.',
  },
  {
    id: '5',
    username: 'FirstTimer',
    rating: 4,
    comment: 'As someone new to this type of service, I found it quite accessible. The documentation was helpful and customer support was quick to resolve my queries.',
  },
  {
    id: '6',
    username: 'RegularUser',
    rating: 5,
    comment: 'Been using this service for years now and it keeps getting better! The recent updates have significantly improved performance.',
  },
];

const ExperienceView: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>CLIENT EXPERIENCES</h1>
        <p className={styles.subtitle}>See what our clients have to say about us</p>
      </header>
      
      <div className={styles.reviewsGrid}>
        {mockReviews.map((review) => (
          <ReviewCard
            key={review.id}
            username={review.username}
            rating={review.rating}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceView;