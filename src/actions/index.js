import axios from 'axios';

const API_KEY = 'a6c45a3b8b1f377d5bcdc4ecde68b577';
const URL = `http://api.openweathermap.org/data/2.5/forecast?&units=imperial&APPID=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
