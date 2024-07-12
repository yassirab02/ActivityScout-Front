import React, { useRef, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { arrowForwardOutline, arrowBackOutline, heartOutline, heart } from 'ionicons/icons';
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
  const [hoveredHeartmark, setHoveredHeartmark] = useState(null);
  const [favorites, setFavorites] = useState([]);

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

  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(index)
        ? prevFavorites.filter((fav) => fav !== index)
        : [...prevFavorites, index]
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-full md:max-w-6xl dark:text-white">
      <h2 className="text-2xl font-semibold mb-6">Suggestions for You</h2>
      <div
        className="relative flex items-center overflow-x-auto"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {hovering && (
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-black rounded-full p-2 z-10 h-10"
          >
            <IonIcon icon={arrowBackOutline} className="text-2xl text-black" />
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
                onClick={() => toggleFavorite(index)}
                onMouseEnter={() => setHoveredHeartmark(index)}
                onMouseLeave={() => setHoveredHeartmark(null)}
                className="absolute top-2 right-2 text-blue-700 text-lg hover:text-xl hover:text-blue-700 bg-white rounded-full p-1 w-8 h-8"
                style={{ zIndex: 20 }}
              >
                <IonIcon icon={favorites.includes(index) ? heart : heartOutline} className="font-bold" />
                {hoveredHeartmark === index && !favorites.includes(index) && (
                  <div className="absolute top-full right-0 mt-1 bg-white text-blue-700 font-semibold text-xs rounded py-1 px-2 z-30">
                    Add to Favorite
                  </div>
                )}
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
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-black rounded-full p-2 h-10"
          >
            <IonIcon icon={arrowForwardOutline} className="text-2xl text-black" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Suggestions;
