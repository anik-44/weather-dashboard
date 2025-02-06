import React from 'react';
import styles from './Forecast.module.css';
import HourlyForecast from "../HourlyForecast/HourlyForecast.jsx";
import FiveDayForecast from "../FiveDayForecast/FiveDayForecast.jsx";
import {Menu01Icon} from "hugeicons-react";

function Forecast() {

    return (
        <div className={styles.container}>
            {/*Welcome Back*/}
            <div>
                <nav className={styles.navBar}>
                    {/*Add icon*/}
                    <div>
                        <h1 className={styles.headerTitle}>
                            Welcome back
                        </h1>
                        <p className={styles.headerDescription}>Check out today&#39;s weather information</p>
                    </div>


                    {/*profile Photo*/}
                    <div>
                        <Menu01Icon/>
                    </div>
                </nav>
            </div>

            {/*3-hour forecasting*/}
            <div className={styles.hourlyForecastContainer}>
                <HourlyForecast/>
            </div>

            {/*// 5-day forecast*/}
            <div className={styles.fiveDayForecastContainer}>
                <FiveDayForecast/>
            </div>
        </div>);
}

export default Forecast;
