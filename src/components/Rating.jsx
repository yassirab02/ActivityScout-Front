import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import 'ionicons/icons';

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="flex space-x-2 justify-center mt-3">
      {Array.from({ length: totalStars }, (_, index) => (
        <IonIcon
          key={index}
          name={rating > index ? 'star' : 'star-outline'}
          onClick={() => handleRating(index)}
          className={`text-yellow-500 cursor-pointer ${
            rating > index ? 'text-yellow-500' : 'text-gray-400'
          }`}
          style={{ fontSize: '24px' }}
        />
      ))}
    </div>
  );
};

export default Rating;
