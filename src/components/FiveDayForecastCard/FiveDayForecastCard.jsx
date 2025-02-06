import styles from './FiveDayForecastCard.module.css'
import {formatDate} from "../../utils/helper.js";
import PropTypes from "prop-types";

function FiveDayForecastCard(props) {
    const formatedDate = formatDate(props.dt);
    const day = formatedDate.toString().split(",")[0].trim();
    const date = formatedDate.toString().split(",")[1].trim();
    const maxTemp = Math.round(props.maxTemp)
    const minTemp = Math.round(props.minTemp)
    const weather = props.weather
    const humidity = props.humidity
    const wind = Number((props.wind * 3.6).toFixed(1))

    return (<div className={styles.container}>
        <div className="">
            <p className={styles.cardHeader}>{day}</p>
            <p className={styles.lightText}>{date}</p>
            <p className={styles.tempMetrics}>{maxTemp}&#176;C</p>
            <p className={styles.lightText}>{minTemp}&#176;C</p>
            <p className={styles.weatherName}>{weather}</p>
        </div>
        <div className={styles.additionalInfoContainer}>
            <div className={styles.additionalInfo}>
                <p>Humidity</p>
                <p className={styles.additionalInfoText}>{humidity}%</p>
            </div>
            <div className={styles.additionalInfo}>
                <p>Wind</p>
                <p className={styles.additionalInfoText}>{wind} km/h</p>
            </div>

        </div>

    </div>);
}

export default FiveDayForecastCard;

FiveDayForecastCard.propTypes = {
    dt: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired,
};
