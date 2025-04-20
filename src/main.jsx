import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product360Video from './components/Product360Video.jsx';


import ProductPage from './pages/ProductPage';

import './index.css'; // Move this AFTER all JS/JSX imports

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
  <Route path="/" element={<ProductPage />} />
  <Route path="/video-view" element={<Product360Video />} />
</Routes>

    </BrowserRouter>
  </React.StrictMode>
);
