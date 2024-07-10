import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

function Hero() {
  return (
    <section id="hero" className="relative bg-white h-screen flex flex-col justify-center items-center text-center text-white px-5" data-aos="fade-in">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat md:bg-fixed hero-background"></div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">Step into CarXpert</h2>
        <a href="#serviceForm" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="200">
          <FontAwesomeIcon icon={faCalendarCheck} /> Book a Service
        </a>
      </div>
      <style jsx>{`
        @media (min-width: 768px) {
          .hero-background {
            background-image: url('images/hero22.jpeg');
          }
        }
        @media (max-width: 767px) {
          .hero-background {
            background-image: url('images/hero23.jpg');
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;