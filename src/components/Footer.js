import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 px-5 text-center" data-aos="fade-up" data-aos-anchor="#contact">
      <p>&copy; {currentYear} CarXpert. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
