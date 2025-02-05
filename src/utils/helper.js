export const formatTodayWeatherData = (data) => {
    if (!data) {
        return null;
    }

    const cityName = data?.name
    const countryCode = data?.sys?.country;
    const sunRise = formatTime(data?.sys?.sunrise);
    const sunSet = formatTime(data?.sys?.sunset);
    const date = formatDate(data?.dt)
    // TODO: Update Temp based on User Pref
    const temp = Math.round(data?.main?.temp)
    const humidity = data?.main?.humidity
    const visibility = Number((data?.visibility / 1000).toFixed(1))
    const windSpeed = Number((data?.wind?.speed * 3.6).toFixed(1)) // convert to Km/h
    const pressure = data?.main?.pressure;

    return {
        cityName: cityName,
        countryCode,
        sunRise,
        sunSet,
        date,
        temp,
        humidity,
        visibility,
        windSpeed,
        pressure,
    }

}

function formatTime(timestamp) {
    if (!timestamp) return "";
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}


function formatDate(timestamp) {
    if (!timestamp) return "";
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });


}
