import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <section id="contact" className="py-20 px-5 bg-gray-800 text-white" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form className="max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">
          <input type="text" name="name" placeholder="Name" required className="w-full p-3 mb-4 bg-gray-700 rounded" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 mb-4 bg-gray-700 rounded" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 mb-4 bg-gray-700 rounded" />
          <input type="text" name="car-model" placeholder="Car Model" required className="w-full p-3 mb-4 bg-gray-700 rounded" />
          <input type="date" name="date" placeholder="Preferred Date" required className="w-full p-3 mb-4 bg-gray-700 rounded" />
          <select name="service" required className="w-full p-3 mb-4 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Service</option>
            <option value="oil-change">Oil Change</option>
            <option value="car-wash">Car Wash</option>
            <option value="tire-change">Tire Change</option>
            <option value="general-maintenance">General Maintenance</option>
            <option value="detailing">Detailing</option>
          </select>
          <input type="text" name="vehicle-number" placeholder="Vehicle Number" required className="w-full p-3 mb-4 bg-gray-700 rounded" />
          <textarea name="message" placeholder="Message" required className="w-full p-3 mb-4 bg-gray-700 rounded h-32"></textarea>
          
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded transition duration-300">
            <FontAwesomeIcon icon={faPaperPlane} /> Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
