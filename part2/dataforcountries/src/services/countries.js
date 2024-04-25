import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";
const openWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const openWeatherKey = import.meta.env.VITE_OPEN_WEATHER_KEY;

const getAll = () => {
  const request = axios.get(`${baseUrl}/all`);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deleteResource = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const getWeather = (capital) => {
  const request = axios.get(
    `${openWeatherUrl}${capital}&appid=${openWeatherKey}&units=metric`
  );
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  deleteResource,
  getWeather,
};
