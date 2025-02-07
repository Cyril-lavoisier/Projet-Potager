import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.26:3000/api', // URL de ton backend
});

export default api;