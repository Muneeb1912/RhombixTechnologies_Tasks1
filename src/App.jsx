import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './MainLayout';
import Portfoliodetail from './pages/Portfoliodetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/:nameid" element={<Portfoliodetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


