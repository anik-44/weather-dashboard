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

function Dashboard() {
    const dispatch = useDispatch();
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
    const searchedCity = useSelector(state => state.weather.city);

    const {
        data: todayWeatherData,
        error: todayWeatherError,
        isError: isTodayWeatherError,
        isLoading: isTodayWeatherLoading
    } = useWeatherQuery(searchedCity);
    const {
        data: forecastData,
        error: forecastError,
        isError: isForecastError,
        isLoading: isForecastLoading
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
            dispatch(setError(forecastError));
        }
        if (isTodayWeatherError) {
            dispatch(setError(todayWeatherError));
        }
    }, [isTodayWeatherError, isForecastError, forecastError, todayWeatherError, dispatch]);


    // toggle Search box modal
    function toggleSearchBox() {
        setIsSearchBoxOpen(!isSearchBoxOpen);
    }

    if (isForecastLoading || isTodayWeatherLoading) {
        return (<h1>Loading...</h1>)
    }

    return (
        <>
            {isSearchBoxOpen && <Modal onClose={toggleSearchBox}><Search/></Modal>}
            <div className={styles.container}>
                <div className={styles.sidePanelContainer}>
                    <TodayWeather toggleSearchBox={toggleSearchBox}/>
                </div>
                <div className={styles.forecastPanelContainer}>
                    <Forecast/>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
