import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section id="hero" className="bg-gray-900 bg-opacity-70 bg-blend-overlay bg-cover bg-center h-screen flex flex-col justify-center items-center text-center text-white px-5" style={{backgroundImage: "url('images/oil-change.jpg')"}} data-aos="fade-in">
      <h2 className="text-5xl font-bold mb-6 animate-fadeInUp">Welcome to CarXpert</h2>
      <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="200">
        <FontAwesomeIcon icon={faCalendarCheck} /> Book a Service
      </a>
    </section>
  );
}

export default Hero;