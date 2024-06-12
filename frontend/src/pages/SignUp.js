// src/pages/SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/register`, {
        name,
        email,
        password,
        role,
      });
      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      setError('Kayıt işlemi başarısız oldu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6'>Kayıt Ol</h2>
        <form onSubmit={handleSignUp}>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-gray-700'>İsim</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full px-3 py-2 border rounded' minLength="3"
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-gray-700'>Şifre</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full px-3 py-2 border rounded'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 text-sm font-bold text-gray-700'>Rol</label>
            <select value={role} onChange={(e) => setRole(e.target.value)} className='w-full px-3 py-2 border rounded'>
              <option value='user'>User</option>
              <option value='boat_owner'>Boat Owner</option>
              <option value='admin'>Admin</option>
            </select>
          </div>
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button
            type='submit'
            className='w-full bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'
          >
            Kayıt Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
