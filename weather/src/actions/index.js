import axios from 'axios';

const API_KEY = '518a3eec5d8bcb5a123b95e353998ad5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ru`;
	const request = axios(url);

	console.log('Request:', request);


	return {
		type: FETCH_WEATHER,
		payload: request
	}
}