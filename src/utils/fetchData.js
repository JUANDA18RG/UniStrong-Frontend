import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

const fetchData = async (url, options = options) => {
  const { data } = await axios(url, options);

  return data;
};

export { fetchData, options };
