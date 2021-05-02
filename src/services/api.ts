import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.21.125.173:3333'
});

export default api;
