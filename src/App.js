import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminArea from './components/AdminArea';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Import ToastContainer from react-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Header />
        {/* ToastContainer renders globally for notifications */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <About />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/admin" element={<AdminArea />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
