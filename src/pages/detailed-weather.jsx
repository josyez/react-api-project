import { useLoaderData, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchWeather } from "../api";
import DisplayWeather from "../components/display-weather";

export default function DetailedPage() {
  
  const [weatherData, setWeatherData] = useState();
  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const searchCity = location.search.replace("?", "");
    console.log(searchCity);
    const fetchWeatherData = async () => {
      const data = await fetchWeather(searchCity);
      setWeatherData(data);
    };
    fetchWeatherData();
  }, []);
  console.log(weatherData);
  return (
    <div className="app">
      {weatherData ? (
        <DisplayWeather weather={weatherData} />
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
