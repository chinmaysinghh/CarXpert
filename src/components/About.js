import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 px-5 bg-white" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">About Us</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Our car service center provides top-notch services with a team of experienced professionals. We are committed to delivering quality maintenance and repair services to keep your vehicle running smoothly and safely on the road.
        </p>
      </div>
    </section>
  );
}

export default About;