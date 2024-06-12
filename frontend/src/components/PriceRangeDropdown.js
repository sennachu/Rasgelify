import React, { useState, useContext } from 'react';
//import icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
//import headless ui
import { Menu } from '@headlessui/react';
//import yacht context
import { YachtContext } from './YachtContext';

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(YachtContext);
  const [isOpen, setIsOpen] = useState(false);
  const prices = [
    {
      value: 'Price range (any)'
    },
    {
      value: '10000 - 30000'
    },
    {
      value: '30000 - 40000'
    },
    {
      value: '100000 - 130000'
    },
    {
      value: '130000 - 160000'
    },
    {
      value: '160000 - 190000'
    },
    {
      value: '190000 - 220000'
    }
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)} 
        className='dropdown-btn w-full text-left'
      >
        <RiWallet3Line className='dropdown-icon-primary'/>
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {price}
          </div>
          <div className='text-[13px]'>
            Choose price range
          </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary'/>
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary'/>
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => (
          <Menu.Item 
            key={index} 
            onClick={() => setPrice(price.value)} 
            className='cursor-pointer hover:text-yellow-700' 
            as='li'
          >
            {price.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
