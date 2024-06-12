// src/components/CountryDropdown.js
import React from 'react';

const CountryDropdown = ({ countries }) => {
  if (!countries || countries.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <select>
      {countries.map((country, index) => (
        <option key={index} value={country.code}>
          {country.name}
        </option>
      ))}
    </select>
  );
};

export default CountryDropdown;
