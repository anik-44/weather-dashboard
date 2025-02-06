import {useEffect, useState} from 'react';
import TodayWeather from "../components/todayWeather/TodayWeather.jsx";
import styles from "./Dashboard.module.css"
import Forecast from "../components/Forecast/Forecast.jsx";
import Modal from "../components/Modal/Modal.jsx";
import Search from "../components/Search/Search.jsx";
import {useForecastQuery, useWeatherQuery} from "../hooks/useWeatherQuery.js";
import {useDispatch, useSelector} from "react-redux";
import {setError, setFiveForecastData, setHourlyWeatherData, setWeatherData} from "../store/weatherSlice.js";
import {formatFiveDayForecast, formatHourlyData} from "../utils/helper.js";
import Error from "../components/Error/Error.jsx";

function Dashboard() {
    const dispatch = useDispatch();
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
    const searchedCity = useSelector(state => state.weather.city);
    const error = useSelector(state => state.weather.error);


    const {
        data: todayWeatherData, error: todayWeatherError, isError: isTodayWeatherError, isLoading: isTodayWeatherLoading
    } = useWeatherQuery(searchedCity);
    const {
        data: forecastData, error: forecastError, isError: isForecastError, isLoading: isForecastLoading
    } = useForecastQuery(searchedCity);


    useEffect(() => {
        // Today
        dispatch(setWeatherData(todayWeatherData));

        // Hourly
        const hourlyWeatherData = formatHourlyData(forecastData);
        dispatch(setHourlyWeatherData(hourlyWeatherData));

        // _Five Day Forecast
        const fiveForecastData = formatFiveDayForecast(forecastData);
        dispatch(setFiveForecastData(fiveForecastData));
    }, [todayWeatherData, forecastData, dispatch])

    useEffect(() => {
        if (isForecastError) {
            dispatch(setError({
                name: forecastError.name, message: forecastError.message,
            }));
            setTimeout(() => {
                dispatch(setError(null));
            }, 5000)
        }
        if (isTodayWeatherError) {
            dispatch(setError({
                name: todayWeatherError.name, message: todayWeatherError.message,
            }));
            setTimeout(() => {
                dispatch(setError(null));
            }, 5000)
        }
    }, [isTodayWeatherError, isForecastError, forecastError, todayWeatherError, dispatch]);


    // toggle Search box modal
    function toggleSearchBox() {
        setIsSearchBoxOpen(!isSearchBoxOpen);
    }

    if (isForecastLoading || isTodayWeatherLoading) {
        return (<h1>Loading...</h1>)
    }

    function onClose() {
        dispatch(setError(null));
    }

    function handleTryAgain() {
        dispatch(setError(null));
        setIsSearchBoxOpen(true);
    }


    return (<>

        {isSearchBoxOpen && <Modal onClose={toggleSearchBox}>
            <Search onClose={toggleSearchBox}/>
        </Modal>}
        {error && <Modal onClose={onClose}><Error tryAgain={handleTryAgain}/></Modal>}
        <div className={styles.container}>
            <div className={styles.sidePanelContainer}>
                <TodayWeather toggleSearchBox={toggleSearchBox}/>
            </div>
            <div className={styles.forecastPanelContainer}>
                <Forecast/>
            </div>
        </div>
    </>);
}

export default Dashboard;
