import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://10.13.214.133:3001/',
});