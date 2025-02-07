import styles from './HourForecastCard.module.css';
import {convertTempMetrics, formatTime} from "../../utils/helper.js";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {iconUrl} from "../../utils/constants.js";

function HourForecastCard(props) {
    const time = formatTime(props.dt, false, "UTC")
    const tempUnit = useSelector(state => state.user.tempUnit)
    const temp = Math.round(convertTempMetrics(props.main.temp, tempUnit))
    const weather = props.weather[0].main
    const icon = props.weather[0].icon;

    return (<>
        <div className={styles.container}>
            <h4 className={styles.metricTitle}>{time}</h4>
            <p className={styles.metricValue}>{temp}&#176;{tempUnit === "celsius" ? "C" : "F"}</p>
            <p className={styles.metricTitle}>
                <span>
                    <img src={`${iconUrl}${icon}.png`} className={styles.icon} alt={'weather icon'}/>
                </span>
                {weather}</p>
        </div>
    </>);
}

export default HourForecastCard;

HourForecastCard.propTypes = {
    dt: PropTypes.number.isRequired, main: PropTypes.object.isRequired, weather: PropTypes.array.isRequired,
    icon: PropTypes.string,
}
