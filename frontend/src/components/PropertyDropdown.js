// src/components/PropertyDropdown.js
import React from 'react';

const PropertyDropdown = ({ properties, onSelectProperty }) => {
  if (!properties || properties.length === 0) {
    return <div>Loading...</div>; 
  }

  return (
    <select onChange={(e) => onSelectProperty(e.target.value)}>
      <option value="">Tüm Özellikler</option>
      {properties.map((property, index) => (
        <option key={index} value={property.name}>
          {property.name}
        </option>
      ))}
    </select>
  );
};

export default PropertyDropdown;
