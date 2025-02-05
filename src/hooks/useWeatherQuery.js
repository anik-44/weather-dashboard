import {useQuery} from "@tanstack/react-query";
import {getWeatherData} from "../services/weatherApi.service.js";


export const useWeatherQuery = (city) => {
    const obj = useQuery({
        queryKey: ['weather', city], queryFn: () => getWeatherData(city), refetchInterval:
            30000, // Poll every 30 secons
        enabled:
            !!city,
    })
    return obj;
}





