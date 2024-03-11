
import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Promo from './component/Promo';
import Servic from './component/Servic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Servic" element={<Servic />} />
      <Route path="/Promo" element={<Promo />} />
      <Route path="/" element={<Footer />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

