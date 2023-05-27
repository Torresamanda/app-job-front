import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './global.css';

import Home from './pages/Home';
import Vagas from './pages/Vagas'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vagas" element={<Vagas/>}/>
    </Routes>
  </BrowserRouter>
);
