import {apikey, apiUrl} from "../utils/constants.js";
import {formatTime} from "../utils/helper.js";


// TODO: Later Update using User pref
const metrics = "metric"

export const getWeatherData = async (city) => {
    const response = await fetch(`${apiUrl}/weather?q=${city}&appid=${apikey}&units=${metrics}`);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    return await response.json();
}

export const getWeatherHourlyData = async (city) => {
    const response = await fetch(`${apiUrl}/forecast?q=${city}&units=${metrics}&appid=${apikey}`);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }
    const data = await response.json();
    // UTC is not req for current Time
    const now = Date.now() / 1000;
    const currentTime = formatTime(now, false);
    const currentHour = currentTime.toString().split(":")[0];

    // Find the closest forecast to the current time
    const currentForecastIndex = data.list.findIndex((item) => {
            const forecastTime = formatTime(item.dt, false, "UTC");
            const forecastHour = forecastTime.toString().split(":")[0]
            return forecastHour >= currentHour;
        }
    )
    return data?.list.slice(currentForecastIndex, currentForecastIndex + 6);
}

