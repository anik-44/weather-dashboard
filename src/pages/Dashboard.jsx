import React, {useEffect, useState} from 'react';
import TodayWeather from "../components/todayWeather/TodayWeather.jsx";
import styles from "./Dashboard.module.css"
import Forecast from "../components/Forecast/Forecast.jsx";
import Modal from "../components/Modal/Modal.jsx";
import Search from "../components/Search/Search.jsx";
import {useForecastQuery, useWeatherQuery} from "../hooks/useWeatherQuery.js";
import {useDispatch, useSelector} from "react-redux";
import {setError, setHourlyWeatherData, setWeatherData} from "../store/weatherSlice.js";
import error from "eslint-plugin-react/lib/util/error.js";

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
        data: hourlyWeatherData,
        error: hourlyWeatherError,
        isError: isHourlyWeatherError,
        isLoading: isHourlyWeatherLoading
    } = useForecastQuery(searchedCity);


    useEffect(() => {
        // Today
        dispatch(setWeatherData(todayWeatherData));
        // Hourly
        dispatch(setHourlyWeatherData(hourlyWeatherData));
    }, [todayWeatherData, hourlyWeatherData, dispatch])

    useEffect(() => {
        if (isHourlyWeatherError) {
            dispatch(setError(hourlyWeatherError));
        }
        if (isTodayWeatherError) {
            dispatch(setError(todayWeatherError));
        }
    }, [isTodayWeatherError, isHourlyWeatherError, hourlyWeatherError, todayWeatherError, dispatch]);


    // toggle Search box modal
    function toggleSearchBox() {
        setIsSearchBoxOpen(!isSearchBoxOpen);
    }

    if (isHourlyWeatherLoading || isTodayWeatherLoading) {
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
