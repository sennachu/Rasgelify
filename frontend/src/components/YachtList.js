import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { YachtContext } from '../components/YachtContext';
import { ImSpinner2 } from 'react-icons/im';
// İkonları import edelim
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const formatPrice = (price) => {
  return price.toLocaleString('tr-TR') + ' ₺';
};


const YachtList = () => {
  const { filteredYachts, loading } = useContext(YachtContext);

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-yellow-700 text-4xl mt-[200px]'/>
    );
  }

  if (!filteredYachts || filteredYachts.length < 1) {
    return <div className='text-center text-3xl text-gray-400 mt-48'>Üzgünüz, hiçbir şey bulunamadı.</div>;
  }

  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {filteredYachts.map((yachtItem) => (
            <Link to={`/property/${yachtItem._id}`} key={yachtItem._id}>
              <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl'>
                <img className='mb-8' src={yachtItem.image} alt={yachtItem.name} />
                <div className='mb-4 flex gap-x-2 text-sm'>
                  <div className='bg-blue-900 rounded-full text-white px-3'>
                    {yachtItem.type}
                  </div>
                  <div className='bg-yellow-500 rounded-full text-white px-3'>
                    {yachtItem.country}
                  </div>
                </div>
                <div className='text-lg font-semibold max-w-[260px]'>
                  {yachtItem.address}
                </div>
                <div className='flex gap-x-4 my-4'>
                  <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px]'>
                      <BiBed />
                    </div>
                    <div>
                      {yachtItem.bedrooms}
                    </div>
                  </div>
                  <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px]'>
                      <BiBath />
                    </div>
                    <div>
                      {yachtItem.bathrooms}
                    </div>
                  </div>
                  <div className='flex items-center text-gray-600 gap-1'>
                    <div className='text-[20px]'>
                      <BiArea />
                    </div>
                    <div>
                      {yachtItem.surface} m²
                    </div>
                  </div>
                </div>
                <div className='text-lg font-semibold text-yellow-600 mb-4'>{formatPrice(yachtItem.price)}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YachtList;
