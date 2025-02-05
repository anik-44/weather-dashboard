import styles from "./TodayWeather.module.css";
import {Search01Icon} from "hugeicons-react";
import CityInfo from "../CityInfo/CityInfo.jsx";
import TempMetrics from "../TempMetrics/TempMetrics.jsx";
import WeatherMetrics from "../WeatherMetrics/WeatherMetrics.jsx";
import Button from "../Button/Button.jsx";
import {useSelector} from "react-redux";
import {formatTodayWeatherData} from "../../utils/helper.js";
import PropTypes from "prop-types";

function TodayWeather({toggleSearchBox}) {
    const weatherState = useSelector(state => state.weather);
    const formatedData = formatTodayWeatherData(weatherState?.weatherData);
    return (<>
        <div className={styles.container}>
            <nav className={styles.navBar}>
                {/*Add icon*/}
                <div className={styles.customAddIcon}>
                    <button className={styles.btnSearch} onClick={toggleSearchBox}>
                        <Search01Icon size={25} color="#FFFFFF" strokeWidth={"3"}/>
                    </button>
                </div>

                {/*toggle Temp Unit*/}
                <div className={styles.toggleBtnContainer}>
                    <div className={styles.btn}>
                        <Button>Celsius</Button>
                    </div>
                    <div>
                        <Button variant={"secondary"}>Fahrenheit</Button>
                    </div>
                </div>

            </nav>

            {/*info*/}
            <div>
                {formatedData && <CityInfo {...formatedData} />}
            </div>

            {/*temp*/}
            <div>
                {formatedData && <TempMetrics {...formatedData} />}
            </div>

            {/*AdditionalInformation */}
            <div>
                {formatedData && <WeatherMetrics {...formatedData} />}
            </div>
        </div>

    </>);
}

export default TodayWeather;
TodayWeather.propTypes = {
    toggleSearchBox: PropTypes.func,
}
