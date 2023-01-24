import axios from 'axios';

const API_URL = `https://api.openweathermap.org/data/2.5/forecast?q=`

export const fetchWeather = async (city) => {

  try {
    const searchCity = city ? city : "bronx"
    const weatherData = await axios.get(`${API_URL}${searchCity}&appid=5f9377a96c727d1b6c538ceaaa7ff4c6&units=imperial`);

    const data = weatherData.data
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
    return "Fail to fetch weather"
  }

}

// export const secondWeather = async () => {

//   try {
//     const weatherData = await axios.get(`${API_URL}guayaquil&appid=5f9377a96c727d1b6c538ceaaa7ff4c6&units=imperial`);

//     const data = weatherData.data
//     console.log(data);
//     return data;
//   } catch (e) {
//     console.log(e);
//     return "Fail to fetch weather"
//   }

// }


