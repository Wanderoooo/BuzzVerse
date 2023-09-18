
import axios from 'axios';
import { useState } from 'react';

export default function Demo() {
  
  const api = axios.create({
    baseURL: 'http://localhost:8000/', // server address backend runs on
  });

  const createUser = async (userData) => {
    try {
      const response = await api.post('signup/', userData);
      localStorage.setItem('access_token', response.data.access_token);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  };
  
  const signInUser = async (loginData) => {
    try {
      const response = await api.post('login/', loginData);
      localStorage.setItem('access_token', response.data.access_token);
      return response.data;
    } catch (error) {
      console.error('Error signing in user:', error);
      throw error;
    }
  };

  
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const SignupComponent = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  async function getUserServers() {
    try {
      const token = localStorage.getItem('access_token');
      
      if (!token) {
        throw new Error('Authentication token is not available');
      }
  
      const response = await api.get('servers/', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching servers:', error);
    }
  }

  const handleSignup = async () => {
    try {
      const response = await createUser(formData);
      console.log('User created:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await signInUser(formData);
      console.log('User signed in:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogOut = async () => {
    localStorage.removeItem('access_token');
  }

  return (
    <div>
      <input type="text" name="username" onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
      <button onClick={getUserServers}>User Servers</button>
      <button onClick={handleLogOut}>Log out</button>
    </div>
  );
};
  
  return (
  <div>
    <h1>backend connectivity demo</h1>
    <SignupComponent />
  </div>)
}