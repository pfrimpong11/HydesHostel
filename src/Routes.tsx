import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RoomPage from './pages/RoomPage';
import BookingPage from './pages/BookingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/RoomPage" element={<RoomPage />} />
      <Route path='/BookingPage' element={<BookingPage/>} />
      <Route path='/AboutPage' element={<AboutPage/>} />
      <Route path='/ContactPage' element={<ContactPage/>} />
    </Routes>
  );
};

export default AppRoutes;
