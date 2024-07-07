import React from 'react';

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
  const services = [
    { title: 'Oil Change', description: 'Regular oil changes to keep your engine running smoothly.', image: 'images/oil-change.jpg' },
    { title: 'Brake Service', description: 'Ensure your safety with our professional brake services.', image: 'images/brake-service.jpg' },
    { title: 'Tire Rotation', description: 'Extend the life of your tires with regular rotations.', image: 'images/tire-rotation.jpg' },
    { title: 'Engine Tune-up', description: 'Optimize your engine performance with our tune-up service.', image: 'images/engine-tuneup.jpg' },
    { title: 'Battery Replacement', description: 'We offer quick and reliable battery replacement services.', image: 'images/battery-replacement.jpg' },
    { title: 'Air Conditioning', description: 'Keep cool with our A/C repair and maintenance services.', image: 'images/air-conditioning.jpg' },
  ];

  return (
    <section id="services" className="py-20 px-5" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} image={service.image} />
        ))}
      </div>
    </section>
  );
}

export default Services;