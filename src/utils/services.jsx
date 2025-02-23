import axios from "axios";
import { DateTime } from "luxon";

const apiKey = `${import.meta.env.VITE_WEATHER_API_KEY}`;
const baseURL = "https://api.openweathermap.org/data/2.5/";

export const getWeatherData = async(endpoint, searchParams) => {

    const url = new URL(baseURL + endpoint);
    url.search = new URLSearchParams({...searchParams, appid: apiKey});

    return await axios.get(url);
}

export const weatherIcon = (icon) => { return `https://openweathermap.org/img/wn/${icon}@2x.png`}

// getting local time
export const formatLocalTime = (secs, timezoneOffset, format = "cccc, MMMM dd, yyyy | tt") => 
    DateTime.fromSeconds(secs + timezoneOffset, {zone : "utc"}).toFormat(format) ;

// getting next 5 days for forecast
export const formatForecastDay = (secs, timezoneOffset, format = "cccc") => 
    DateTime.fromSeconds(secs + timezoneOffset, {zone : "utc"}).toFormat(format) ;

// http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid={API key} // pollution data for AQI