import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faHome, faTools, faInfoCircle, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-gray-800 ${isScrolled ? 'bg-opacity-90 shadow-lg' : ''} fixed top-0 left-0 w-full z-50`}>
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <h1 className="text-2xl text-white"><FontAwesomeIcon icon={faCar} /> CarXpert</h1>
        
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-800 flex items-center justify-center z-50">
            <div className="container mx-auto px-5 py-4">
              {/* Close button */}
              <button 
                className="absolute top-5 right-5 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              </button>
              <ul className="flex flex-col items-center space-y-20">
                <li>
                  <a href="#hero" className="text-white hover:text-blue-400 text-2xl uppercase" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faHome} /> HOME
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white hover:text-blue-400 text-2xl uppercase" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faTools} /> SERVICES
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white hover:text-blue-400 text-2xl uppercase" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faInfoCircle} /> ABOUT US
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white hover:text-blue-400 text-2xl uppercase" onClick={() => setIsMenuOpen(false)}>
                    <FontAwesomeIcon icon={faEnvelope} /> CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <nav className="md:flex md:space-x-8 hidden">
          <ul className="flex space-x-8">
            <li><a href="#hero" className="text-white hover:text-blue-400 transition-colors duration-300 uppercase"><FontAwesomeIcon icon={faHome} /> HOME</a></li>
            <li><a href="#services" className="text-white hover:text-blue-400 transition-colors duration-300 uppercase"><FontAwesomeIcon icon={faTools} /> SERVICES</a></li>
            <li><a href="#about" className="text-white hover:text-blue-400 transition-colors duration-300 uppercase"><FontAwesomeIcon icon={faInfoCircle} /> ABOUT US</a></li>
            <li><a href="#contact" className="text-white hover:text-blue-400 transition-colors duration-300 uppercase"><FontAwesomeIcon icon={faEnvelope} /> CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;