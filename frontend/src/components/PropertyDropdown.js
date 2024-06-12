import React, { useState, useContext } from 'react';
//import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
//import headless ui
import { Menu } from '@headlessui/react';
//import yacht context
import { YachtContext } from './YachtContext';

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(YachtContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)} 
        className='dropdown-btn w-full text-left'
      >
        <RiHome5Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[13px]'>
            Select your properties
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary'/>
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary'/>
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => (
          <Menu.Item 
            key={index} 
            onClick={() => setProperty(property)} 
            className='cursor-pointer hover:text-yellow-700' 
            as='li'
          >
            {property}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
