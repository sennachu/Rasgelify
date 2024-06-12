import React, { createContext, useEffect, useState } from 'react';
//import data
import { yachtesData } from '../data';

//create context
export const YachtContext = createContext();

const YachtContextProvider = ({ children }) => {

  const [yachts, setYachts] = useState(yachtesData);
  const [country, setCountry] = useState('Location type (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [setPrices] = useState([]);
  const [loading, setLoading] = useState(false);

  //return all countries
  useEffect(() => {
    const allCountries = yachts.map((yachts) => {
      return yachts.country
    });
    //remove duplicates
    const uniqueCountries = ['Location type (any)', ... new Set(allCountries)];
    //set countries state
    setCountries(uniqueCountries)
  },[]);

  //return all properties
  useEffect(() => {
    const allProperties = yachts.map((yachts) => {
      return yachts.type
    });
    //remove duplicates
    const uniqueProperties = ['Property type (any)', ... new Set(allProperties)];
    //set properties state
    setProperties(uniqueProperties)
  },[]);

  //return all prices
  useEffect(() => {
    const allPrices = yachts.map((yachts) => {
      return yachts.price
    });
    //remove duplicates
    const uniquePrices = ['Price range (any)', ... new Set(allPrices)];
    //set properties state
    setPrices(uniquePrices)
  },[]);
  
  
  const handleClick = () => {
    //set loading
    setLoading(true);
    //create a function that checks if the string includes any
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };
    //get first value of price and parse it to number
    const minPrice = parseInt(price.split(' ')[0]);
    //get second value of price and parse it to number
    const maxPrice = parseInt(price.split(' ')[2]);

    const newYachtes = yachtesData.filter((yachts)=> {
      const yachtPrice = parseInt(yachts.price);

      //if all values are selected
      if (
        yachts.country === country && 
        yachts.type === property && 
        yachts.price >= minPrice &&
         yachts.price <= maxPrice 
        ) {
          return yachts;
        }

      //if all value are default
      if (
        isDefault(country) && isDefault(property) & isDefault(price)
      ) {
          return yachts;
      }
        
      //if country is not default
      if (
        !isDefault(country) && isDefault(property) && isDefault(price)
      ) {
        return yachts.country === country;
      }

      //if property is not default
      if (
        !isDefault(property) && isDefault(country) && isDefault(price)
      ) {
        return yachts.type === property;
      }

      //if price is not default
      if (
        !isDefault(price) && isDefault(country) && isDefault(property)
      ) {
        if (
          yachtPrice >= minPrice && yachtPrice <= maxPrice
        ) {
          return yachts;
        }
      }

      //if country and property is not default
      if (
        !isDefault(country) && !isDefault(property) && isDefault(price)
      ) {
        return yachts.country === country && yachts.type === property
      }

      //if country and price is not default
      if (
        !isDefault(country) && isDefault(property) && !isDefault(price)
      ) {
        if (
          yachtPrice >= minPrice && yachtPrice <= maxPrice
        ){
          return yachts.country === country;
        }
      }

      //if property and price is not default
      if (
        isDefault(country) && !isDefault(property) && !isDefault(price)
      ){
        if(
          yachtPrice >= minPrice && yachtPrice <= maxPrice
        ){
          return yachts.type === property
        }
      }
    });
    setTimeout(() => {
      return newYachtes.length < 1 ? setYachts([]) :
      setYachts(newYachtes),
      setLoading(false);
    }, 500)
    
  };

  return (
    <YachtContext.Provider value={{
      country,
      setCountry,
      countries,
      property,
      setProperty,
      properties,
      setProperties,
      price,
      setPrice,
      yachts,
      loading,
      handleClick,
    }}>
      {children}
    </YachtContext.Provider>
  );
};

export default YachtContextProvider;
