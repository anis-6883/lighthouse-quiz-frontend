import axios from 'axios';

const lighthouseBackendUrl = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LIGHTHOUSE_BACKEND_URL,
  timeout: 20000,
  headers: {
    'content-type': 'application/json',
    Accept: 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'x-api-key': process.env.NEXT_PUBLIC_LIGHTHOUSE_API_KEY,
  },
});

export { lighthouseBackendUrl };
