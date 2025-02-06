import styles from './HourForecastCard.module.css';
import {convertTempMetrics, formatTime} from "../../utils/helper.js";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

function HourForecastCard(props) {
    const time = formatTime(props.dt, false, "UTC")
    const tempUnit = useSelector(state => state.user.tempUnit)
    const temp = Math.round(convertTempMetrics(props.main.temp, tempUnit))
    const weather = props.weather[0].main

    return (
        <>
            <div className={styles.container}>
                <h4 className={styles.metricTitle}>{time}</h4>
                <p className={styles.metricValue}>{temp}&#176;{tempUnit === "celsius" ? "C" : "F"}</p>
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
