import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo/rasgelify.png';
import authService from './AuthService'; // AuthService'ı dahil ediyoruz

const Header = () => {
  const handleLogout = () => {
    authService.removeUser();
    window.location.reload();
  };

  const user = authService.getUser();

  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt=''/>
        </Link>
        <div className='flex items-center gap-6'>
          {user ? (
            <>
              <span>{user.name}</span>
              <button onClick={handleLogout} className='text-yellow-700 font-bold'>
                Çıkış Yap
              </button>
              {user.role === 'user' && (
                <Link to='/reservations' className='text-yellow-700 font-bold'>
                  Rezervasyonlarım
                </Link>
              )}
              {user.role === 'boat_owner' && (
                <>
                  <Link to='/my-boats' className='text-yellow-700 font-bold'>
                    Gemilerim
                  </Link>
                  <Link to='/pending-reservations' className='text-yellow-700 font-bold'>
                    Bekleyen Rezervasyonlar
                  </Link>
                </>
              )}
              {user.role === 'admin' && (
                <>
                  <Link to='/all-boats' className='text-yellow-700 font-bold'>
                    Tüm Gemiler
                  </Link>
                  <Link to='/all-reservations' className='text-yellow-700 font-bold'>
                    Tüm Rezervasyonlar
                  </Link>
                </>
              )}
            </>
          ) : (
            <>
              <Link to='/signup' className='text-yellow-700 font-bold mr-4'>
                Kayıt Ol
              </Link>
              <Link to='/login' className='text-yellow-700 font-bold'>
                Giriş Yap
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
