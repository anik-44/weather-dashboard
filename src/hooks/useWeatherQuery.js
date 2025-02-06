import {useQuery} from "@tanstack/react-query";
import {getWeatherData, getWeatherHourlyData} from "../services/weatherApi.service.js";


export const useWeatherQuery = (city) => {
    return useQuery({
        queryKey: ['weather', city], queryFn: () => getWeatherData(city), refetchInterval:
            30000, // Poll every 30 sec
        enabled:
            !!city,
    })
}

export const useForecastQuery = (city) => {
    return useQuery({
        queryKey: ['forecast', city, 'hourly'],
        queryFn: () => getWeatherHourlyData(city),
        refetchInterval: 30000,
        enabled: !!city
    })
}


// export const useFiveDayForecastQuery = (city) => {
//     return useQuery({
//         queryKey: ['forecast', city, 'daily'], queryFn: () => getFiveDayForecast(city), refetchInterval: 30000
//     })
// }
