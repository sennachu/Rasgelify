import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';
import authService from '../components/AuthService';

const MyBoats = () => {
  const [boats, setBoats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoats = async () => {
      try {
        const token = localStorage.getItem('token');
        const user = authService.getUser();
        const userId = user.id;
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/boats`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        const userBoats = response.data.filter(boat => boat.owner._id === userId);
        setBoats(userBoats);
      } catch (error) {
        console.error('Gemiler getirilemedi:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoats();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      console.log(token);
      console.log(id);
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/boats/${id}`, {
        headers: {
          Authorization: `${token}`,
        },
      });
     
      setBoats(boats.filter(boat => boat._id !== id));
    } catch (error) {
      console.error('Gemi silinemedi:', error);
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
      <h2 className='text-3xl font-semibold mb-4'>Gemilerim</h2>
      {boats.length === 0 ? (
        <div className='text-center text-lg text-gray-500'>Henüz geminiz yok.</div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {boats.map((boat) => (
            <div key={boat._id} className='bg-white shadow-md rounded-lg p-4'>
              {boat.image && (
                <img 
                  src={boat.image} 
                  alt={boat.name} 
                  className='mb-4 w-full h-40 object-cover rounded-lg'
                />
              )}
              <h3 className='text-xl font-semibold mb-2'>{boat.name }</h3>
              <p className='text-gray-700'>{boat.description}</p>
              <button
                onClick={() => handleDelete(boat._id)}
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

export default MyBoats;
