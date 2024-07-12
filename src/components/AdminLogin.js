import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      username === process.env.REACT_APP_ADMIN_USERNAME &&
      password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      toast.success('Admin login successful!');
      navigate('/admin');
    } else {
      toast.error('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg max-w-md w-full">
        <h3 className="text-2xl font-bold text-center text-gray-800">Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block text-gray-700" htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-center mt-6">
              <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-900 transition duration-300" type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;