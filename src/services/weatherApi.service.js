import {apikey, apiUrl} from "../utils/constants.js";

export const getWeatherData = async (city) => {
    try {
        const response = await fetch(`${apiUrl}/weather?q=${city}&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data. Please try again.");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error
    }
}

// forecast Req
export const fetchForecast = async (city) => {
    try {
        const response = await fetch(`${apiUrl}/forecast?q=${city}&appid=${apikey}`);
        if (!response.ok) {
            throw new Error("Failed to fetch weather data. Please try again.");
        }
        return await response.json();

    } catch (error) {
        console.error(error);
        throw error
    }

}


