import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function AdminArea() {
  const [contactData, setContactData] = useState([]);
  const [serviceData, setServiceData] = useState([]);
  const [showContactData, setShowContactData] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const contactFormData = JSON.parse(localStorage.getItem('contactFormData')) || [];
    const serviceFormData = JSON.parse(localStorage.getItem('serviceFormData')) || [];
    setContactData(contactFormData);
    setServiceData(serviceFormData);
  }, []);

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, fileName);
  };

  const exportContactData = () => {
    if (contactData.length > 0) {
      const formattedData = contactData.map(entry => ({
        Name: entry.name,
        Email: entry.email,
        Phone: entry.phone,
        Message: entry.message
      }));
      exportToExcel(formattedData, 'contact_data.xlsx');
    } else {
      toast.error('No contact data available to export.');
    }
  };

  const exportServiceData = () => {
    if (serviceData.length > 0) {
      const formattedData = serviceData.map(entry => ({
        Name: entry.name,
        Email: entry.email,
        Phone: entry.phone,
        CarModel: entry.carModel,
        Service: entry.service,
        DropOff: entry.dropOrPickup === 'drop-off' ? 'Yes' : 'No',
        Pickup: entry.dropOrPickup === 'pickup' ? 'Yes' : 'No',
        'Preferred Date': entry.date,
        'Preferred Time': entry.time,
        Comments: entry.comments,
        Photos: entry.photos ? entry.photos.name : 'No photos'
      }));
      exportToExcel(formattedData, 'service_data.xlsx');
    } else {
      toast.error('No service data available to export.');
    }
  };

  const handleDownload = (file) => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = file.name;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    toast.success('Logged out successfully');
    navigate('/admin-login');
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Admin Area</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 mr-2 rounded ${showContactData ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'}`}
              onClick={() => setShowContactData(true)}
            >
              Contact Info
            </button>
            <button
              className={`px-4 py-2 rounded ${!showContactData ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'}`}
              onClick={() => setShowContactData(false)}
            >
              Service Info
            </button>
          </div>
          
          {showContactData ? (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Contact Form Data</h3>
              {contactData.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-blue-500 text-white">
                        <th className="py-3 px-4 border-b-2">Name</th>
                        <th className="py-3 px-4 border-b-2">Email</th>
                        <th className="py-3 px-4 border-b-2">Phone</th>
                        <th className="py-3 px-4 border-b-2">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactData.map((entry, index) => (
                        <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                          <td className="py-3 px-4 border-b">{entry.name}</td>
                          <td className="py-3 px-4 border-b">{entry.email}</td>
                          <td className="py-3 px-4 border-b">{entry.phone}</td>
                          <td className="py-3 px-4 border-b">{entry.message}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-gray-600">No contact form submissions yet.</p>
              )}
            </>
          ) : (
            <>
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Service Form Data</h3>
              {serviceData.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white">
                    <thead>
                      <tr className="bg-green-500 text-white">
                        <th className="py-3 px-4 border-b-2">Name</th>
                        <th className="py-3 px-4 border-b-2">Email</th>
                        <th className="py-3 px-4 border-b-2">Phone</th>
                        <th className="py-3 px-4 border-b-2">Car Model</th>
                        <th className="py-3 px-4 border-b-2">Service</th>
                        <th className="py-3 px-4 border-b-2">Drop Off</th>
                        <th className="py-3 px-4 border-b-2">Pickup</th>
                        <th className="py-3 px-4 border-b-2">Preferred Date</th>
                        <th className="py-3 px-4 border-b-2">Preferred Time</th>
                        <th className="py-3 px-4 border-b-2">Comments</th>
                        <th className="py-3 px-4 border-b-2">Photos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {serviceData.map((entry, index) => (
                        <tr key={index} className="bg-gray-50 hover:bg-gray-100">
                          <td className="py-3 px-4 border-b">{entry.name}</td>
                          <td className="py-3 px-4 border-b">{entry.email}</td>
                          <td className="py-3 px-4 border-b">{entry.phone}</td>
                          <td className="py-3 px-4 border-b">{entry.carModel}</td>
                          <td className="py-3 px-4 border-b">{entry.service}</td>
                          <td className="py-3 px-4 border-b">{entry.dropOrPickup === 'drop-off' ? 'Yes' : 'No'}</td>
                          <td className="py-3 px-4 border-b">{entry.dropOrPickup === 'pickup' ? 'Yes' : 'No'}</td>
                          <td className="py-3 px-4 border-b">{entry.date}</td>
                          <td className="py-3 px-4 border-b">{entry.time}</td>
                          <td className="py-3 px-4 border-b">{entry.comments}</td>
                          <td className="py-3 px-4 border-b">
                            {entry.photos ? (
                              <button
                                onClick={() => handleDownload(entry.photos)}
                                className="text-blue-500 hover:underline cursor-pointer"
                              >
                                {entry.photos.name}
                              </button>
                            ) : 'No photos'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-gray-600">No service bookings yet.</p>
              )}
            </>
          )}
          
          <button
            onClick={showContactData ? exportContactData : exportServiceData}
            className={`mt-6 bg-${showContactData ? 'blue' : 'green'}-500 hover:bg-${showContactData ? 'blue' : 'green'}-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center ${(showContactData ? contactData : serviceData).length === 0 && 'opacity-50 cursor-not-allowed'}`}
            disabled={(showContactData ? contactData : serviceData).length === 0}
          >
            Export {showContactData ? 'Contact' : 'Service'} <FontAwesomeIcon icon={faFileExcel} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminArea;