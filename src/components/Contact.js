import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    date: '',
    service: '',
    vehicleNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToLocalStorage(formData);
    toast.success('Booking done!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    e.target.reset();
  };

  const saveToLocalStorage = (data) => {
    const existingData = JSON.parse(localStorage.getItem('contactFormData')) || [];
    existingData.push(data);
    localStorage.setItem('contactFormData', JSON.stringify(existingData));
  };

  return (
    <section id="contact" className="py-20 px-5 bg-gray-800 text-white" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="100">
          <input type="text" name="name" placeholder="Name" required className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={handleChange} />
          <input type="text" name="carModel" placeholder="Car Model" required className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={handleChange} />
          <input type="date" name="date" placeholder="Preferred Date" required className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={handleChange} />
          <select name="service" required className="w-full p-3 mb-4 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleChange}>
            <option value="">Select Service</option>
            <option value="oil-change">Car Health Check</option>
            <option value="car-wash">Detailing</option>
            <option value="tire-change">PPF</option>
            <option value="general-maintenance">Ceramic Coat</option>
            <option value="detailing">Oil Change</option>
            <option value="detailing">Tire Rotation</option>
            <option value="detailing">Battery Check</option>
            <option value="detailing">Brake Service</option>
            <option value="detailing">AC Repair</option>
            <option value="detailing">Engine Tune</option>
            <option value="detailing">Wheel Alignment</option>
          </select>
          <input type="text" name="vehicleNumber" placeholder="Vehicle Number" required className="w-full p-3 mb-4 bg-gray-700 rounded" onChange={handleChange} />
          <textarea name="message" placeholder="Message" required className="w-full p-3 mb-4 bg-gray-700 rounded h-32" onChange={handleChange}></textarea>
          
          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 w-64">
              <FontAwesomeIcon icon={faPaperPlane} /> Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
