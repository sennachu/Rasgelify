import React from 'react';
// import data
import { yachtesData } from '../data';
// import use params
import { useParams } from 'react-router-dom';
// import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
// import link
import { Link } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const yacht = yachtesData.find(yacht => yacht.id === parseInt(id));

  return (
    <section className='container mx-auto min-h-[800px] mb-14'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2xl font-semibold'>{yacht.name}</h2>
          <h3 className='text-lg mb-4'>{yacht.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-blue-900 rounded-full text-white px-3'>{yacht.type}</div>
          <div className='bg-yellow-500 rounded-full text-white px-3'>{yacht.country}</div>
        </div>
        <div className='text-3xl font-semibold text-yellow-600 mb-4'>{yacht.price}TL</div>
      </div>

      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={yacht.image} alt={yacht.name} className='max-w-full' />
          </div>
          <div className='flex gap-x-6 text-yellow-700 mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-3xl' />
              <div>{yacht.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-3xl' />
              <div>{yacht.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-3xl' />
              <div>{yacht.surface}</div>
            </div>
          </div>
          <div>{yacht.description}</div>
        </div>
        <div className='flex-1 bg-gray-100  mb-8 border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border-gray-300 rounded-full'>
              <img src={yacht.agent.image} alt={yacht.agent.name} />
            </div>
            <div>
              <div className='font-bold text-lg'>{yacht.agent.name}</div>
              <Link to='' className='text-yellow-700 text-sm'>View Listings</Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-5'>
            <input className='border border-gray-300 focus:border-yellow-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='Name' type='text'></input>
            <input className='border border-gray-300 focus:border-yellow-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='E-mail' type='text'></input>
            <input className='border border-gray-300 focus:border-yellow-700 outline-none rounded w-full px-4 h-14 text-sm' placeholder='Phone' type='text'></input>
            <textarea className='border border-gray-300 focus:border-yellow-700 outline-none rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message' defaultValue={"Hello, I'm interested this yacht!"}></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-yellow-500 hover:bg-yellow-600 text-white rounded p-4 text-sm w-full'>Send message</button>
              <button className='bg-blue-700 text-white hover:bg-blue-900 text-white rounded p-4 text-sm w-full'>Call</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
