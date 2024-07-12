import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ServiceForm from './components/ServiceForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminArea from './components/AdminArea';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';
import Preloader from './components/Preloader';
import ScrollArrow from './components/ScrollArrow';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      delay: 200,
      offset: 120,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="bg-gray-100 text-gray-800">
        <Preloader />
        <Header />
        <Toaster 
          position="top-center"
          reverseOrder={false}
        />
        <div id="main-content" style={{ display: 'none' }}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Services />
                <About />
                <ServiceForm />
                <Contact />
                <Footer />
                <ScrollArrow />
              </>
            } />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminArea />
              </ProtectedRoute>
            } />
            <Route path="/admin-login" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;