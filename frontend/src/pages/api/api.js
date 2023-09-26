import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/', // server address backend runs on
});

export default api;