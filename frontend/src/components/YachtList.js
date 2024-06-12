// YachtList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Yacht from './Yacht';
import { YachtContext } from './YachtContext';
import {ImSpinner2} from 'react-icons/im'

const YachtList = () => {
  const { yachts, loading } = useContext(YachtContext);
  // if loading is true
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-yellow-700 text-4x1 mt-[200px]'/>
    );
  }

  if (yachts.length < 1) {
    return <div className='text-center text-3x1 text-gray-400 mt-48'>Sorry, nothing found.</div>
  } 

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 
        lg:grid-cols-3 gap-4 lg:gap-14'>
          {Array.isArray(yachts) && yachts.length > 0 ? (
            yachts.map((yachtItem, index) => (
              <Link to={`/property/${yachtItem.id}`} key={index}>
                <Yacht yacht={yachtItem} />
              </Link>
            ))
          ) : (
            <p>No yachts available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default YachtList;
