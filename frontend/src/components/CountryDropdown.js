import React, { useState, useContext } from 'react';
//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
//import headless ui
import { Menu } from '@headlessui/react';
//import yacht context
import { YachtContext } from './YachtContext';

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(YachtContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)} 
        className='dropdown-btn w-full text-left'
      >
        <RiMapPinLine className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {country}
          </div>
          <div className='text-[13px]'>
            Select your place
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary'/>
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary'/>
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => (
          <Menu.Item 
            key={index} 
            onClick={() => setCountry(country)} 
            className='cursor-pointer hover:text-yellow-700' 
            as='li'
          >
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
