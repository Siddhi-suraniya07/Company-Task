import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Projects API
export const getProjects = () => api.get('/projects');
export const createProject = (data: FormData) => 
  api.post('/projects', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

// Clients API
export const getClients = () => api.get('/clients');
export const createClient = (data: FormData) => 
  api.post('/clients', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });

// Contact API
export const getContacts = () => api.get('/contact');
export const submitContact = (data: {
  fullName: string;
  email: string;
  mobile: string;
  city: string;
}) => api.post('/contact', data);

// Newsletter / Subscribe API (backend route: /api/subscribe)
export const getNewsletterSubscriptions = () => api.get('/subscribe');
export const subscribeNewsletter = (email: string) => api.post('/subscribe', { email });

export default api;
