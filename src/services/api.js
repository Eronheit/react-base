import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_API_URL_DEV
      : process.env.REACT_APP_API_URL_PROD,
});

export default api;
