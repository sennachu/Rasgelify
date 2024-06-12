import React from 'react';
import Banner from '../components/Banner';
import YachtList from '../components/YachtList';

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Banner/>
      <YachtList/>
    </div>
  );
};

export default Home;
