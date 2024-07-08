import React, { useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForwardCircleOutline, arrowBackCircleOutline, bookmarkOutline } from 'ionicons/icons';
import kech from '../assets/kech.jpg';
import tanger from '../assets/tanger.jpg';
import azzemour from '../assets/azzemour.jpg';
import taghazout from '../assets/taghazout.jpg';
import rabat from '../assets/rabat.jpg';

const Suggestions = () => {
  const suggestionsData = [
    {
      title: 'Marrakesh',
      description: 'The city of red',
      image: kech,
    },
    {
      title: 'Tanger',
      description: 'The blue city',
      image: tanger,
    },
    {
      title: 'Azzemour',
      description: 'A beautiful city',
      image: azzemour,
    },
    {
      title: 'Taghazout',
      description: 'Amazing place',
      image: taghazout,
    },
    {
      title: 'Rabat',
      description: 'The capital of Morocco',
      image: rabat,
    },
  ];

  const scrollRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-full md:max-w-6xl">
      <h2 className="text-2xl font-bold mb-6">Suggestions for You</h2>
      <div
        className="relative flex items-center overflow-x-auto"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {hovering && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300 z-10"
          >
            <IonIcon icon={arrowBackCircleOutline} className="text-2xl text-gray-800" />
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex space-x-4 pb-4"
          style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {suggestionsData.map((suggestion, index) => (
            <div
              key={index}
              className="relative bg-transparent shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 w-64 cursor-pointer"
              style={{ minWidth: '280px', maxWidth: '280px', height: 'fit-content' }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={suggestion.image}
                  alt={suggestion.title}
                  className="w-full h-full object-cover hover:opacity-80"
                />
              </div>
              <button
                className="absolute top-2 right-2 text-white text-lg hover:text-xl hover:text-blue-700 bg-gray-400  rounded-full p-1"
              >
                <IonIcon icon={bookmarkOutline} />
              </button>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{suggestion.title}</h3>
                <p className="text-gray-600">{suggestion.description}</p>
              </div>
            </div>
          ))}
        </div>
        {hovering && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <IonIcon icon={arrowForwardCircleOutline} className="text-2xl text-gray-800" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
