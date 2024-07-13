import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import 'ionicons/icons';

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleMouseOver = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <div className="flex space-x-2 justify-center mt-3">
      {Array.from({ length: totalStars }, (_, index) => (
        <IonIcon
          key={index}
          name={
            hoverRating > index
              ? 'star'
              : rating > index
              ? 'star'
              : 'star-outline'
          }
          onClick={() => handleRating(index)}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}
          className={`text-yellow-500 cursor-pointer ${
            hoverRating > index || rating > index
              ? 'text-yellow-500'
              : 'text-gray-400'
          }`}
          style={{ fontSize: '24px' }}
        />
      ))}
    </div>
  );
};

export default Rating;
