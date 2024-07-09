import React from 'react';

const TrendingPlaces = () => {
  // Dummy data (replace with actual data fetching logic)
  const trendingPlaces = [
    { id: 1, name: 'New York City' },
    { id: 2, name: 'Paris' },
    { id: 3, name: 'Tokyo' },
    { id: 4, name: 'Marrakesh' },
    { id: 5, name: 'Tanger' },
    { id: 6, name: 'Agadir' },
    { id: 7, name: 'Zagoura' },
    { id: 8, name: 'Rabat' },
    // Add more places as needed
  ];

  return (
    <div className="mx-auto px-52 py-8">
      <h2 className="text-3xl font-semibold mb-7">Trending Places</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {trendingPlaces.map(place => (
          <li key={place.id} className="">
            <button className='hover:text-blue-700 hover:border-b-2 hover:border-blue-700'><span className="text-md font-md">{place.name}</span></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPlaces;
