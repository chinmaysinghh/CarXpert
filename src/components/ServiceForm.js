import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const servicesList = [
  'Car Health Check',
  'Detailing',
  'Battery Replacement',
  'PPF (Paint Protection Film)',
  'Ceramic Coat',
  'Oil Change',
  'Tire Rotation',
  'Battery Check',
  'Brake Service',
  'AC Repair',
  'Engine Tune',
  'Wheel Alignment'
];

function ServiceForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    service: '',
    date: '',
    time: '',
    dropOrPickup: '',
    comments: '',
    photos: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveToLocalStorage(formData, 'serviceFormData');
    toast.success('Booking Done!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    e.target.reset();
    setFormData({
      name: '',
      email: '',
      phone: '',
      carModel: '',
      service: '',
      date: '',
      time: '',
      dropOrPickup: '',
      comments: '',
      photos: null
    });
  };

  const saveToLocalStorage = (data, key) => {
    const existingData = JSON.parse(localStorage.getItem(key)) || [];
    existingData.push(data);
    localStorage.setItem(key, JSON.stringify(existingData));
  };

  return (
    <section id="serviceForm" className="py-20 px-5 bg-gray-100 text-gray-800" data-aos="fade-up">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-blue-500 after:mx-auto after:mt-4">Book a Service</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="grid grid-cols-2 gap-6">
            <input type="text" name="name" placeholder="Name" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} />
            <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} />
            <input type="text" name="carModel" placeholder="Car Model" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            <select name="service" className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} required>
              <option value="">Select Service</option>
              {servicesList.map((service, index) => (
                <option key={index} value={service}>{service}</option>
              ))}
            </select>
            <input type="date" name="date" placeholder="Preferred Date" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} />
            <input type="time" name="time" placeholder="Preferred Time" required className="w-full p-3 bg-gray-200 rounded" onChange={handleChange} style={{ minWidth: '180px' }} />
            <select name="dropOrPickup" className="w-full p-3 bg-gray-200 rounded" onChange={handleChange}>
              <option value="">Select Option</option>
              <option value="drop-off">Drop-off</option>
              <option value="pickup">Pickup</option>
            </select>
          </div>
          <textarea name="comments" placeholder="Comments/Additional Information" className="w-full p-3 mt-6 bg-gray-200 rounded h-32" onChange={handleChange}></textarea>
          <div className="mt-6">
            <label className="block mb-2">Upload Photos (if any):</label>
            <input type="file" name="photos" className="w-full" onChange={handleChange} />
          </div>
          <div className="flex justify-center mt-6">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 flex items-center justify-center">
              Book Service <FontAwesomeIcon icon={faCalendarCheck} className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ServiceForm;