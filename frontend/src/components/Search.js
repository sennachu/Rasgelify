import React, { useContext, useState } from 'react';
//import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PriceRangeDropdown';
//import icons
import { RiSearch2Line } from 'react-icons/ri';
//import context
import { YachtContext } from './YachtContext';

const Search = () => {
  const { countries, properties, handleClick } = useContext(YachtContext);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedProperty, setSelectedProperty] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex 
    flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative
    lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur
    rounded-lg'>
      <CountryDropdown countries={countries} onSelectCountry={setSelectedCountry} />
      <PropertyDropdown properties={properties} onSelectProperty={setSelectedProperty} />
      <PriceRangeDropdown onSelectPriceRange={setSelectedPriceRange} />
      <button
        onClick={() => handleClick(selectedCountry, selectedProperty, selectedPriceRange)}
        className='bg-yellow-700 hover:bg-yellow-600 w-full lg:max-w-[162px] 
      h-16 rounded-lg flex justify-center items-center text-white text-lg p-3'
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
