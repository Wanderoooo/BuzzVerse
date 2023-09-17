## Getting Started

To call backend api, use the axios library

What is Axios?
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.

axios docs: https://axios-http.com/docs/intro

```bash
npm install axios
```

Run both backend and frontend servers at the same time

from root directory:

```bash
cd backend
```
activate virtual environment for python

```bash
pip install -r requirements.txt # if buggy, you might need to manually pip install django and djangorestframework, pip install djangorestframework-simplejwt
py manage.py runserver # (runs http://127.0.0.1:8000/)
```
Now run your frontend server like you did

from backend directory:

```bash
cd .. # return to root directory
cd frontend
npm run dev # (runs http://127.0.0.1:3000/)
```
## Data structure UML
Refer to datarelationships.png (in same directory as this README.md) 

## Axios Setup
Create a new .js file (ex. api.js)

```javascript
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', // server address backend runs on
});

export default api;
```
Now we have created our base api

## User Management
For authentication, we will use a JWT token. Each user has a unique token, and it is passed back to api to gain access user data after signin. 

The following is a demo of how to retrieve user data in your signin form, tailor to your components

First, create functions that signs up/in your user, similar to the following:

```javascript
// let's say this is in userService.js
import api from './api';

export const createUser = async (userData) => {
  try {
    const response = await api.post('signup/', userData);
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const signInUser = async (loginData) => {
  try {
    const response = await api.post('login/', loginData);
    localStorage.setItem('access_token', response.data.access_token);
    return response.data;
  } catch (error) {
    console.error('Error signing in user:', error);
    throw error;
  }
};

// Configure axios to use the token for subsequent requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

```
Then, call the above functions above in your signup/login react page similar like this:

```javascript
import React, { useState } from 'react';
import { createUser, signInUser } from './userService';

const SignupComponent = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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

  return (
    <div>
      <input type="text" name="username" onChange={handleChange} placeholder="Username" />
      <input type="password" name="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SignupComponent;
```

## API routes
### User Management Routes:
- Signup: http://localhost:8000/signup/
- Login: http://localhost:8000/login/
- User Profile: http://localhost:8000/profile/

### Token Routes:
- Obtain Token: http://localhost:8000/auth/token/
- Refresh Token: http://localhost:8000/auth/token/refresh/

### User Messages Routes:

* List/Create Text Messages (via DRF router): http://localhost:8000/texts/
* Retrieve/Update/Delete a Single Text Message (via DRF router): http://localhost:8000/texts/<int:text_id>
* Get Texts in a Specific Channel: http://localhost:8000/servers/<int:server_id>/channels/<int:channel_id>/texts

### Servers and Channels Routes:

* List/Create Servers (via DRF router): http://localhost:8000/servers/
* Retrieve/Update/Delete a Single Server (via DRF router): http://localhost:8000/servers/<int:server_id>/
* List/Create Channels (via DRF router): http://localhost:8000/channels/
* Retrieve/Update/Delete a Single Channel (via DRF router): http://localhost:8000/channels/<int:channel_id>/
* Get Channels in a Specific Server: http://localhost:8000/servers/<int:server_id>/channels/
* Get a Specific Channel in a Specific Server: http://localhost:8000/servers/<int:server_id>/channels/<int:channel_id>/

### Admin Route:
- Admin Panel: http://localhost:8000/admin/