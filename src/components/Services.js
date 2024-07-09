import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'; // Assuming you want a downward arrow

function ServiceCard({ title, description, image }) {
  return (
    <div className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-lg" data-aos="fade-up" data-aos-delay="100">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent flex flex-col justify-end items-center p-6">
        <h3 className="text-2xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-white text-center text-sm">{description}</p>
      </div>
    </div>
  );
}

function Services() {
  const [showAllServices, setShowAllServices] = useState(false);

  const services = [
    { title: 'Car Health Check', description: 'Ensure your car runs smoothly and safely with a check-up covering everything from the engine to the brakes.', image: 'images/healthcheck.jpg' },
    { title: 'Detailing', description: 'Restore your car’s interior and exterior to pristine condition with our professional detailing service, giving it a fresh and clean look.', image: 'images/detailing.jpg' },
    { title: 'Battery Replacement', description: 'Swap out your old battery for a new one to guarantee reliable performance and prevent inconvenient breakdowns. Keep your car powered and ready to go.', image: 'images/battery.jpg' },
    { title: 'PPF (Paint Protection Film)', description: 'Protect your car’s paint from scratches and chips with a durable, transparent film that keeps it looking new.', image: 'images/ppf.jpg' },
    { title: 'Ceramic Coat', description: 'Enhance your car’s appearance and protect it from dirt, UV rays, and minor scratches with our long-lasting ceramic coating.', image: 'images/ceramic.jpg' },
    { title: 'Oil Change', description: 'Keep your engine in peak condition with regular oil changes, including filter replacements for optimal performance.', image: 'images/oil.jpg' },
    { title: 'Tire Rotation', description: 'Extend the lifespan of your tires and improve safety with our rotation service, ensuring even wear for better handling.', image: 'images/tirerotation.jpg' },
    { title: 'Battery Check', description: 'Ensure your car starts reliably with our thorough battery testing and replacement services when needed.', image: 'images/batterycheck.jpg' },
    { title: 'Brake Service', description: 'Maintain your brakes for safety and performance with our comprehensive inspection and maintenance services.', image: 'images/brakeservice.jpg' },
    { title: 'AC Repair', description: 'Stay comfortable in any weather with our AC repair services, diagnosing and fixing issues to keep your car cool.', image: 'images/acrepair.jpg' },
    { title: 'Engine Tune', description: 'Optimize your engine for better fuel efficiency and performance with our expert tune-up service.', image: 'images/enginetune.jpg' },
    { title: 'Wheel Alignment', description: 'Ensure even tire wear and optimal handling with our precision wheel alignment service, improving your driving experience and safety.', image: 'images/wheelalign.jpg' },
  ];

  // Show only the first 6 services or all services based on showAllServices state
  const visibleServices = showAllServices ? services : services.slice(0, 6);

  const toggleShowAll = () => {
    setShowAllServices(!showAllServices);
  };

  return (
    <section id="services" className="py-20 px-5" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleServices.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
      {!showAllServices && (
        <div className="flex justify-center mt-8">
          <a
            href="#viewAllServices"
            onClick={toggleShowAll}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 flex items-center"
          >
            View All <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
          </a>
        </div>
      )}
    </section>
  );
}

export default Services;
