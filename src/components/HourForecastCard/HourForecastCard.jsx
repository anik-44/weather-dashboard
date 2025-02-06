import styles from './HourForecastCard.module.css';
import {formatTime} from "../../utils/helper.js";
import PropTypes from "prop-types";

function HourForecastCard(props) {
    const time = formatTime(props.dt, false, "UTC")
    // TODO:
    const temp = Math.round(props.main.temp)
    const weather = props.weather[0].main
    return (
        <>
            <div className={styles.container}>
                <h4 className={styles.metricTitle}>{time}</h4>
                <p className={styles.metricValue}>{temp}&#176;C</p>
                <p className={styles.metricTitle}>{weather}</p>
            </div>
        </>
    );
}

export default HourForecastCard;

HourForecastCard.propTypes = {
    dt: PropTypes.number.isRequired,
    main: PropTypes.object.isRequired,
    weather: PropTypes.array.isRequired,
}
