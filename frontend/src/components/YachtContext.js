// src/context/YachtContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const YachtContext = createContext();

const YachtProvider = ({ children }) => {
  const [yachts, setYachts] = useState([]);
  const [countries, setCountries] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredYachts, setFilteredYachts] = useState([]);

  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const yachtResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/boats`);
        setYachts(yachtResponse.data);
        setFilteredYachts(yachtResponse.data); // Başlangıçta tüm yatları göster

        // Ülkeleri çıkaralım
        const uniqueCountries = [...new Set(yachtResponse.data.map(boat => boat.country))];
        const countryData = uniqueCountries.map((country, index) => ({ code: index, name: country }));
        setCountries(countryData);

        // Özellikleri çıkaralım
        const uniqueProperties = [...new Set(yachtResponse.data.map(boat => boat.type))];
        const propertyData = uniqueProperties.map((property, index) => ({ code: index, name: property }));
        setProperties(propertyData);

        setLoading(false);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
        setLoading(false);
      }
    };

    fetchYachts();
  }, []);

  const handleClick = (selectedCountry, selectedProperty, selectedPriceRange) => {
    // Arama işlemini gerçekleştirme
    const filtered = yachts.filter((yacht) => {
      return (
        (selectedCountry ? yacht.country === selectedCountry : true) &&
        (selectedProperty ? yacht.type === selectedProperty : true) &&
        (selectedPriceRange ? yacht.price <= selectedPriceRange : true)
      );
    });
    setFilteredYachts(filtered);
  };

  return (
    <YachtContext.Provider value={{ yachts, countries, properties, loading, filteredYachts, handleClick }}>
      {children}
    </YachtContext.Provider>
  );
};

export default YachtProvider;
