import React, {useEffect, useState} from 'react';
import TodayWeather from "../components/todayWeather/TodayWeather.jsx";
import styles from "./Dashboard.module.css"
import Forecast from "../components/Forecast/Forecast.jsx";
import Modal from "../components/Modal/Modal.jsx";
import Search from "../components/Search/Search.jsx";
import {useWeatherQuery} from "../hooks/useWeatherQuery.js";
import {useDispatch, useSelector} from "react-redux";
import {setError, setWeatherData} from "../store/weatherSlice.js";

function Dashboard() {
    const dispatch = useDispatch();
    const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
    const searchedCity = useSelector(state => state.weather.city);
    const {data, error, isError, isLoading} = useWeatherQuery(searchedCity);


    useEffect(() => {
        dispatch(setWeatherData(data))
    }, [data, dispatch])

    useEffect(() => {
        return () => {
            dispatch(setError(error))
        };
    }, [isError, dispatch, error]);


    // toggle Search box modal
    function toggleSearchBox() {
        setIsSearchBoxOpen(!isSearchBoxOpen);
    }

    if (isLoading) {
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
