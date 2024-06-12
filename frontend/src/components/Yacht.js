import React from 'react';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const Yacht = ({ yacht }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price, name } = yacht;

  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl'>
      <img className='mb-8' src={image} alt={name} />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-blue-900 rounded-full text-white px-3'>
          {type}
        </div>
        <div className='bg-yellow-500 rounded-full text-white px-3'>
          {country}
        </div>
      </div>
      <div className='text-lg font-semibold max-w-[260px]'>
        {address}
      </div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>
            {bedrooms}
          </div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>
            {bathrooms}
          </div>
        </div>
        <div className='flex items-center text-gray-600 gap-1'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>
            {surface} m²
          </div>
        </div>
      </div>
      <div className='text-lg font-semibold text-yellow-600 mb-4'>{price} TL</div>
    </div>
  );
};

export default Yacht;
