import React from 'react';
//import image
import Image from '../assets/img/logo/banner.png';
//import components
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col 
        items-center lg:items-start text-center lg:text-left 
        justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4x1 lg:text-[48px] font-semibold
          leading-none mb-6'>
            <span className='text-yellow-700'>Rent </span>
            Your Dream With Us.
          </h1>
          <p className='max-w-[480px] mb-8'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
          and scrambled it to make a type specimen book. 
          </p>
        </div>
        {/* image */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img 
            src={Image} 
            alt="Yacht Banner" 
            className='w-[500px] h-[400px] object-cover' 
          />
        </div>
      </div>
      <Search/>
    </section>
  );
};

export default Banner;
