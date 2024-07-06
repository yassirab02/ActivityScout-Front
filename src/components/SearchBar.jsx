import React, { useState } from 'react';
import 'ionicons';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  // Static list of places for example purposes
  const places = [
    "Marrakech",
    "Agadir",
    "Casablanca",
    "Rabat",
    "Tanger",
    "Essaouira",
    "Azemour",
    "Tetouan",
    "Meknes",
    "El Jadida"
  ];

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = places.filter(place =>
        place.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    onSearch(suggestion);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto mt-10">
      <form onSubmit={handleSearchSubmit} className="flex items-center bg-white rounded-lg border border-gray-500 py-2 focus-within:ring-indigo-500 focus-within:ring-2 relative">
        <ion-icon name="location" class="absolute left-3 text-2xl text-gray-400"></ion-icon>
        <input
          className="appearance-none bg-transparent w-full text-gray-700 mr-3 py-1 px-2 pl-10 leading-tight focus:outline-none"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="flex-shrink-0 bg-blue-600 hover:bg-blue-300 border-blue-600 hover:border-blue-300 text-sm border-4 text-white py-1 px-2 rounded mr-2"
          type="submit"
        >
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200 flex items-center"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <ion-icon name="location" class="mr-2 text-lg"></ion-icon>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
