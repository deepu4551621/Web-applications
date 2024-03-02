import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [];
  const maxStars = 5; // Maximum number of stars

  for (let i = 1; i <= maxStars; i++) {
    const filled = i <= rating/2; // Check if the star should be filled
    stars.push(
      <span key={i} className={`star ${filled ? 'filled' : ''}`}>
        &#9733; {/* Unicode for star character */}
      </span>
    );
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
