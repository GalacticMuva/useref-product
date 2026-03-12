import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import LoginPage from './LoginPage';
import ProductCard from './ProductCard.jsx'
import EduGrid from './EduGrid.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product" element={<ProductCard />} />
        <Route path="/grid" element={<EduGrid />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

