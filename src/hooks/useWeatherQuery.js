import {useQuery} from "@tanstack/react-query";
import {fetchForecast, getWeatherData} from "../services/weatherApi.service.js";


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
        queryFn: () => fetchForecast(city),
        refetchInterval: 30000,
        enabled: !!city
    })
}
