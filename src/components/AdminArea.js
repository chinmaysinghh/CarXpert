// AdminArea.js

import React from 'react';
import * as XLSX from 'xlsx';

const AdminArea = () => {
  const generateExcelFile = () => {
    const existingData = JSON.parse(localStorage.getItem('contactFormData')) || [];
    
    const ws_data = [
      ["Name", "Email", "Phone", "Car Model", "Date", "Service", "Vehicle Number", "Message"],
      ...existingData.map(d => [d.name, d.email, d.phone, d.carModel, d.date, d.service, d.vehicleNumber, d.message])
    ];

    const ws = XLSX.utils.aoa_to_sheet(ws_data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Contact Form Data");

    XLSX.writeFile(wb, 'Contact_Form_Data.xlsx');
  };

  return (
    <section id="admin-area" className="py-20 px-5 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Admin Area</h2>
        <div className="flex justify-center">
          <button 
            onClick={generateExcelFile} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:-translate-y-1 w-64">
            Download Excel
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminArea;
