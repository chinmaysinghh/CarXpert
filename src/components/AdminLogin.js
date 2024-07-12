import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Production environment variables:', process.env);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Entered username:', username);
    console.log('Entered password:', password);
    console.log('Expected username:', process.env.REACT_APP_ADMIN_USERNAME);
    console.log('Expected password:', process.env.REACT_APP_ADMIN_PASSWORD);

    if (
      username === process.env.REACT_APP_ADMIN_USERNAME &&
      password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      toast.success('Admin login successful!');
      navigate('/admin');
    } else {
      toast.error('Invalid username or password');
      console.log('Login failed. Comparison results:');
      console.log('Username match:', username === process.env.REACT_APP_ADMIN_USERNAME);
      console.log('Password match:', password === process.env.REACT_APP_ADMIN_PASSWORD);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">Username</label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-baseline justify-between">
              <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;