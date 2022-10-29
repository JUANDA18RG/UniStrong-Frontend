import axios from 'axios';

const fetchData = async (url, host, options = {}) => {
  const config = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
      'X-RapidAPI-Host': host,
    },
    ...options,
  };

  const { data } = await axios(url, config);

  return data;
};

export { fetchData };
