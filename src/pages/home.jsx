
import { Link, useLoaderData } from "react-router-dom";
import DisplayWeather from "../components/display-weather";

export default function HomePage() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="app">
       <DisplayWeather weather={data} />
    </div>
  );
}

// <Box  as={Link} to='/detailed' key={index}