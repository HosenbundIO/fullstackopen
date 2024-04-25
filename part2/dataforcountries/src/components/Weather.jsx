import { useState, useEffect } from "react";
import countriesService from "../services/countries";

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    countriesService.getWeather(city).then((weatherCapital) => {
      setWeather(weatherCapital);
    });
  }, [city]);
  console.log("WEATHER:", weather);
  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>temperature {weather.main.temp} Celcius</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather icon"
      />
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
