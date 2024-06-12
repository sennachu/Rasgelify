import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import YachtProvider from './components/YachtContext';
import Reservations from './pages/Reservations'
import AllBoats from './pages/AllBoats'
import AllReservations from './pages/AllReservations'
import MyBoats from './pages/MyBoats'
import PendingReservations from './pages/PendingReservations'

const App = () => {
  return (
    <YachtProvider>
      <div className='max-w-[1440px] mx-auto bg-white'>
        <Header />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/property/:id' element={<PropertyDetails />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/my-boats" element={<MyBoats />} />
          <Route path="/pending-reservations" element={<PendingReservations />} />
          <Route path="/all-boats" element={<AllBoats />} />
          <Route path="/all-reservations" element={<AllReservations />} />
        </Routes>
        <Footer />
      </div>
    </YachtProvider>
  );
};

export default App;
