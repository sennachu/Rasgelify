import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { YachtContext } from '../components/YachtContext';
import { ImSpinner2 } from 'react-icons/im';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { FaMoneyBillWave, FaMapMarkerAlt } from 'react-icons/fa';
import CountryFlag from 'react-country-flag';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import AuthService from '../components/AuthService';

const formatPrice = (price) => {
  return price.toLocaleString('tr-TR') + ' TL';
};

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { yachts, loading } = useContext(YachtContext);
  const [yacht, setYacht] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (yachts.length > 0) {
      const foundYacht = yachts.find((yacht) => yacht._id === id);
      setYacht(foundYacht);
    }
  }, [id, yachts]);

  const handleReservation = async () => {
    try {
      const token = localStorage.getItem('token');
      const user = AuthService.getUser();
      const userId = user.id;
      
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/reservations`, {
        userId,
        boat: yacht._id,
        dateFrom:startDate,
        dateTo:endDate,
      }, {
        headers: {
          Authorization: `${token}`,
        },
      });
      if (response.status === 201) {
        navigate('/reservations');
      }
    } catch (error) {
      console.error('Rezervasyon oluşturulamadı:', error);
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <ImSpinner2 className='animate-spin text-yellow-700 text-4xl' />
      </div>
    );
  }

  if (!yacht) {
    return <div className='text-center text-3xl text-gray-400 mt-48'>Üzgünüz, bu yat bulunamadı.</div>;
  }

  const { name, type, country, address, bedrooms, bathrooms, surface, price, image } = yacht;

  const role = jwtDecode(localStorage.getItem('token')).role;

  return (
    <div className='container mx-auto p-6'>
      <div className='bg-white shadow-1 p-5 rounded-lg'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/2'>
            <img className='mb-8 w-full h-full object-cover rounded-lg' src={image} alt={name} />
          </div>
          <div className='lg:w-1/2 lg:pl-8'>
            <h2 className='text-3xl font-semibold mb-4'>{name}</h2>
            <p className='text-lg text-gray-600 mb-4'>{type}</p>
            <div className='flex items-center gap-2 mb-4'>
              <CountryFlag countryCode={countryCode(country)} svg className='w-8 h-8'/>
              <p className='text-lg text-gray-600'>{country}</p>
            </div>
            <div className='flex items-center gap-2 mb-4'>
              <FaMapMarkerAlt className='text-yellow-600'/>
              <p className='text-lg text-gray-600'>{address}</p>
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
            <div className='text-lg font-semibold text-yellow-600 mb-4 flex items-center gap-2'>
              <FaMoneyBillWave />
              {formatPrice(price)}
            </div>
            {role === 'user' && (
              <div className='flex flex-col gap-4'>
                <input 
                  type='date' 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)} 
                  className='border p-2 rounded'
                />
                <input 
                  type='date' 
                  value={endDate} 
                  onChange={(e) => setEndDate(e.target.value)} 
                  className='border p-2 rounded'
                />
                <button onClick={handleReservation} className='bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'>
                  Rezervasyon Yap
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const countryCode = (countryName) => {
  switch (countryName) {
    case 'Türkiye':
      return 'TR';
    case 'Yunanistan':
      return 'GR';
    case 'İspanya':
      return 'ES';
    case 'İtalya':
      return 'IT';
    case 'Fransa':
      return 'FR';
    default:
      return '';
  }
};

export default PropertyDetails;
