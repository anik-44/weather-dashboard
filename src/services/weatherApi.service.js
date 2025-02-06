import {apikey, apiUrl} from "../utils/constants.js";

export const getWeatherData = async (city) => {
    const response = await fetch(`${apiUrl}/weather?q=${city}&appid=${apikey}`);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    return await response.json();
}

// forecast Req
export const fetchForecast = async (city) => {
    const response = await fetch(`${apiUrl}/forecast?q=${city}&appid=${apikey}`);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    return await response.json();

}


