import axios from 'axios';

const baseURL = 'https://tradephere-backend.vercel.app/api'
// const baseURL = 'http://localhost:5000/api'

const api = axios.create({
  baseURL, // your NestJS backend
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },

});

export default api;