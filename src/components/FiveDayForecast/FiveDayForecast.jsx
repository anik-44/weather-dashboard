import styles from './FiveDayForecast.module.css';
import FiveDayForecastCard from "../FiveDayForecastCard/FiveDayForecastCard.jsx";
import {useSelector} from "react-redux";

function FiveDayForecast() {
    const fiveDayForecastData = useSelector(state => state.weather.fiveDayForecastData);

    const city = fiveDayForecastData?.city?.name
    const country = fiveDayForecastData?.city?.country

    return (<div className={styles.container}>
        <div className={styles.titleContainer}>
            <h3 className={styles.headTitle}>5-Day Forecast</h3>
            <p className={styles.cityName}>{city}, {country}</p>
        </div>
        <div className={styles.fiveDayForecastCard}>
            {fiveDayForecastData && Object.entries(fiveDayForecastData).map(([key, value], index) => {
                if (index !== 0 && key !== "city") {
                    return < FiveDayForecastCard
                        key={key}
                        {...value}
                    />
                }
            })}
        </div>
    </div>);
}

export default FiveDayForecast;
