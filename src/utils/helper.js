export const formatTodayWeatherData = (data,tempUnit) => {
    if (!data) {
        return null;
    }

    const cityName = data?.name
    const countryCode = data?.sys?.country;
    const sunRise = formatTime(data?.sys?.sunrise);
    const sunSet = formatTime(data?.sys?.sunset);
    const date = formatDate(data?.dt)
    // TODO: Update Temp based on User Pref
    const temp = Math.round(convertTempMetrics(data?.main?.temp, tempUnit))
    const humidity = data?.main?.humidity
    const visibility = Number((data?.visibility / 1000).toFixed(1))
    const windSpeed = Number((data?.wind?.speed * 3.6).toFixed(1)) // convert to Km/h
    const pressure = data?.main?.pressure;

    return {
        cityName: cityName, countryCode, sunRise, sunSet, date, temp, humidity, visibility, windSpeed, pressure,
    }

}

export function formatTime(timestamp, format12H = true, timeZone = undefined) {
    if (!timestamp) return "";
    const time = new Date(timestamp * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", hour12: format12H, timeZone: timeZone,
    });
    return time;
}

export function formatDate(timestamp) {
    if (!timestamp) return "";
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long", month: "long", day: "numeric",
    });
}


export const formatHourlyData = (data) => {
    if (!data) {
        return null
    }
    // UTC is not req for current Time
    const now = Date.now() / 1000;
    const currentTime = formatTime(now, false);
    const currentHour = currentTime.toString().split(":")[0];

    // Find the closest forecast to the current time
    const currentForecastIndex = data.list.findIndex((item) => {
        const forecastTime = formatTime(item.dt, false, "UTC");
        const forecastHour = forecastTime.toString().split(":")[0]
        return forecastHour >= currentHour;
    })
    return data?.list.slice(currentForecastIndex, currentForecastIndex + 6);
}

export const formatFiveDayForecast = (data) => {
    if (!data) {
        return null;
    }
    const groupDataBasedOnDate = groupData(data);
    groupDataBasedOnDate['city'] = data?.city;
    return groupDataBasedOnDate;
}


const groupData = (data) => {
    const groupedData = data?.list.reduce((acc, item) => {
        const date = item["dt_txt"].split(" ")[0];
        if (!acc[`${date}`]) {
            acc[date] = {
                dt: item.dt,
                maxTemp: -Infinity,
                minTemp: Infinity,
                humidity: item?.main?.humidity,
                wind: item?.wind?.speed,
                weather: item?.weather[0].main,
            };
        }
        // Update max & min
        acc[date].maxTemp = Math.max(acc[date].maxTemp, item?.main?.temp);
        acc[date].minTemp = Math.min(acc[date].minTemp, item?.main?.temp);
        return acc;
    }, {})

    return groupedData;
}

export const convertTempMetrics = (tempK, unit) => {
    if (unit === "celsius") {
        return Math.round(tempK - 273.15);
    } else if (unit === "fahrenheit") {
        return Math.round((tempK - 273.15) * 9 / 5 + 32)
    }
    return tempK;
};
