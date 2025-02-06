import MetricsCard from "../MetricCard/MetricsCard.jsx";
import styles from "./WeatherMetrics.module.css";
import PropTypes from "prop-types";

function WeatherMetrics({humidity, visibility, windSpeed, pressure}) {
    return (
        <div className={styles.container}>
            <div>
                <MetricsCard title={"Humidity"} data={humidity} unit={"%"} />
                <MetricsCard title={"Pressure"} data={pressure}  unit={"hPa"} />
            </div>
            <div>
                <MetricsCard title={"Visibility"} data={visibility} unit={"Km"} />
                <MetricsCard title={"Wind Speed"} data={windSpeed} unit={"Km/h"} />
            </div>


        </div>
    );
}

export default WeatherMetrics;

WeatherMetrics.propTypes = {
    humidity: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
};
