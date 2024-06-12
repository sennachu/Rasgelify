import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import authService from '../components/AuthService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        console.log(response.data);
        const data = await response.data;
        console.log(data);
        authService.setUser(data.user);
        console.log(data.user);
        localStorage.setItem('token', response.data.token);
        axios.defaults.headers.common['Authorization'] = response.data.token;
        navigate('/');
        window.location.reload(); 
      
      }
    } catch (error) {
      setError('Giriş işlemi başarısız oldu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-96'>
        <h2 className='text-2xl font-bold mb-6'>Giriş Yap</h2>
        <form onSubmit={handleLogin}>
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
          {error && <p className='text-red-500 text-sm'>{error}</p>}
          <button
            type='submit'
            className='w-full bg-yellow-700 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
