import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import { jwtDecode } from 'jwt-decode';
import AuthService from '../components/AuthService';
import { useNavigate } from 'react-router-dom';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = AuthService.getUser();
        const userId = user.id;

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/reservations`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const userReservations = response.data.filter(reservation => reservation.user._id === userId);
        setReservations(userReservations);
      } catch (error) {
        console.error('Rezervasyonlar getirilemedi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/reservations/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });

      setReservations(reservations.filter(reservation => reservation._id !== id));
    } catch (error) {
      console.error('Rezervasyon silinemedi:', error);
    }
  };

  if (loading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='spinner-border text-yellow-700'></div>
      </div>
    );
  }

  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-3xl font-semibold mb-4'>Rezervasyonlarım</h2>
      {reservations.length === 0 ? (
        <div className='text-center text-lg text-gray-500'>Henüz rezervasyonunuz yok.</div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {reservations.map((reservation) => (
            <div key={reservation._id} className='bg-white shadow-md rounded-lg p-4'>
              {reservation.boat.image && (
                <img 
                  src={reservation.boat.image} 
                  alt={reservation.boat.name} 
                  className='mb-4 w-full h-40 object-cover rounded-lg'
                />
              )}
              <h3 className='text-xl font-semibold mb-2'>{reservation.boat.name}</h3>
              <p className='text-gray-700'>Başlangıç Tarihi: {new Date(reservation.dateFrom).toLocaleDateString()}</p>
              <p className='text-gray-700'>Bitiş Tarihi: {new Date(reservation.dateTo).toLocaleDateString()}</p>
              <button
                onClick={() => handleDelete(reservation._id)}
                className='mt-4 bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded flex items-center justify-center'
              >
                <FaTrash className='mr-2' /> Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Reservations;
