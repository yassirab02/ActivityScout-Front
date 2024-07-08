import React, { useState } from 'react';
import 'ionicons';
import search from '../assets/search.png'; // Assuming you have this image
import countries from '../assets/countries.png';
import location from '../assets/location.png';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('All');

  // Static list of places for example purposes
  const places = [
    "Marrakech",
    "Agadir",
    "Casablanca",
    "Rabat",
    "Tanger",
    "Essaouira",
    "Azemmour",
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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // Dynamically change the title based on the selected option
  let title = '';
  switch (selectedOption) {
    case 'All':
      title = 'Where to ?';
      break;
    case 'Country':
      title = 'Choose a country';
      break;
    case 'City':
      title = 'Choose a city';
      break;
    default:
      title = 'Where to ?';
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10">
      <h1 className='text-6xl mb-16 flex justify-center items-center font-[Poppins] font-bold'>{title}</h1>
      <div className='flex justify-center gap-24 mb-5 text-xl font-[Poppins]'>
        <button
          className={`flex items-center space-x-2 font-semibold ${selectedOption === 'All' ? 'border-b-2 border-blue-600' : 'hover:border-b-2 hover:border-blue-600 hover:opacity-80'}`}
          onClick={() => handleOptionClick('All')}
        >
          <img src={search} alt="All" className="w-8 h-8 " />
          <span>All</span>
        </button>
        <button
          className={`flex items-center space-x-2 font-semibold ${selectedOption === 'Country' ? 'border-b-2 border-blue-600' : 'hover:border-b-2 hover:border-blue-600 hover:opacity-80'}`}
          onClick={() => handleOptionClick('Country')}
        >
          <img src={countries} alt="Countries" className="w-8 h-8 " />
          <span>Country</span>
        </button>
        <button
          className={`flex items-center space-x-2 font-semibold ${selectedOption === 'City' ? 'border-b-2 border-blue-600' : 'hover:border-b-2 hover:border-blue-600 hover:opacity-80'}`}
          onClick={() => handleOptionClick('City')}
        >
          <img src={location} alt="Location" className="w-8 h-8 " />
          <span>City</span>
        </button>

      </div>
      <form onSubmit={handleSearchSubmit} className="flex items-center bg-white rounded-full border border-gray-300 py-2 px-3 shadow-xl focus-within:ring-indigo-500 focus-within:ring-2 relative">
        <ion-icon name="location-outline" class="absolute left-4 text-3xl text-gray-800"></ion-icon>
        <input
          className="appearance-none bg-transparent w-full text-black mr-3 py-1 px-2 pl-12 leading-tight focus:outline-none text-lg"
          type="text"
          placeholder="Country, city, places,.."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          className="flex-shrink-0 bg-blue-600 hover:bg-blue-400 border-blue-600 hover:border-blue-400 text-sm border-4 text-white py-2 px-4 rounded-full ml-2 shadow-md"
          type="submit"
        >
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-lg z-10 max-h-40 overflow-y-auto">
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
