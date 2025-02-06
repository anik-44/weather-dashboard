import styles from './HourlyForecast.module.css';
import HourForecastCard from "../HourForecastCard/HourForecastCard.jsx";
import {useSelector} from "react-redux";

function HourlyForecast() {
    const hourlyWeatherData = useSelector(state => state.weather.hourlyWeatherData);

    return (
        <>
            <div className={styles.container}>
                <h3 className={styles.hourlyForecastTitle}>Today&#39;s Forecast</h3>
                <div className={styles.hourlyForecastCardContainer}>
                    {hourlyWeatherData &&
                        hourlyWeatherData.length > 0 &&
                        hourlyWeatherData.map((data) => {
                            return <HourForecastCard key={data.dt} {...data} />
                        })

                    }
                </div>
            </div>
        </>
    );
}

export default HourlyForecast;
