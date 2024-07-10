import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-5 bg-white" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">About Us</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
          <div className="max-w-md">
            <img src="images/about.png" alt="About Us"  />
          </div>
          <div className="max-w-lg text-center md:text-left">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to CarXpert, where expert service meets excellence every time. We offer a wide range of services to keep your car running smoothly and to enhance your driving experience. Our skilled team is committed to giving your car the best care possible, whether it’s for routine maintenance, detailed repairs, or professional detailing services to protect and enhance your vehicle's finish.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              At CarXpert, we know how important your vehicle is to you. From a simple oil change to detailed engine diagnostics, as well as high-quality detailing services, we are here to ensure your car stays in top shape. Trust us with your vehicle and enjoy outstanding service and customer satisfaction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              Choose CarXpert and let us be your trusted partner on the road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
