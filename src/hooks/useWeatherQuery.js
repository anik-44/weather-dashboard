import {useQuery} from "@tanstack/react-query";
import {getWeatherData} from "../services/weatherApi.service.js";
import {useDispatch} from "react-redux";
import {setError, setWeatherData} from "../store/weatherSlice.js";


export const useWeatherQuery = (city) => {
    const dispatch = useDispatch();
    const obj = useQuery({
        queryKey: ['weather', city], queryFn: () => getWeatherData(city),
        onSuccess: data => {
            dispatch(setWeatherData(data));
        }, onError: error => {
            dispatch(setError(error));
        }, refetchInterval: 30000, // Poll every 30 secons
        enabled: !!city,
    })
    return obj;
}





