import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Hero from './component/Hero';
import Services from './component/Services';
import Comment from './component/Comment';
import Footer from './component/Footer';
import Contact from './component/Contact';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/comments" element={<Comment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
