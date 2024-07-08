import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-5 bg-gray-200" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="max-w-md">
            <img src="images/about.png" alt="About Us"  />
          </div>
          <div className="max-w-lg text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to our car service center, where quality meets expertise. We specialize in providing a wide range of services to enhance your driving experience and maintain your vehicle's peak performance. Our team of dedicated professionals ensures your car receives the care it deserves, from routine maintenance to complex repairs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Whether you need a simple oil change or intricate engine diagnostics, we are here to ensure your car stays in top condition. Trust us with your vehicle, and experience unparalleled service and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
