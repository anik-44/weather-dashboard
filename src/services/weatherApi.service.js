import {apikey, apiUrl} from "../utils/constants.js";

// TODO: Later Update using User pref
const metrics = "metric"

export const getWeatherData = async (city) => {
    const response = await fetch(`${apiUrl}/weather?q=${city}&appid=${apikey}&units=${metrics}`);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    return await response.json();
}

