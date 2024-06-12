// src/components/PriceRangeDropdown.js
import React from 'react';

const PriceRangeDropdown = ({ onSelectPriceRange }) => {
  const priceRanges = [
    { value: '', label: 'Tüm Fiyatlar' },
    { value: 50000, label: '50,000 TL' },
    { value: 75000, label: '75,000 TL' },
    { value: 100000, label: '100,000 TL' },
  ];

  return (
    <select onChange={(e) => onSelectPriceRange(e.target.value)}>
      {priceRanges.map((priceRange, index) => (
        <option key={index} value={priceRange.value}>
          {priceRange.label}
        </option>
      ))}
    </select>
  );
};

export default PriceRangeDropdown;
