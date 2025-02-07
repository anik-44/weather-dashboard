import styles from './TempMetrics.module.css';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {iconUrl} from "../../utils/constants.js";

function TempMetrics({temp, icon, weather}) {
    const tempUnit = useSelector(state => state.user.tempUnit);
    return (<div className={styles.container}>
        <h3>
            <span className={styles.tempMetrics}>{temp}<span className={styles.degree}>&#176;</span></span>
            <span className={styles.subTempMetrics}>
                {tempUnit === "celsius" ? ("C") : "F"}
            </span>
        </h3>
        <div className={styles.weatherContainer}>
                <span>
                    <img src={`${iconUrl}${icon}.png`} className={styles.icon} alt={'weather icon'}/>
                </span>
            <h4 className={styles.weather}>{weather}</h4>
        </div>
    </div>);
}

export default TempMetrics;

TempMetrics.propTypes = {
    icon: PropTypes.string,
    temp: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
}
