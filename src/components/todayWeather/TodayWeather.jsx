import styles from "./TodayWeather.module.css";
import {Search01Icon} from "hugeicons-react";
import CityInfo from "../CityInfo/CityInfo.jsx";
import TempMetrics from "../TempMetrics/TempMetrics.jsx";
import WeatherMetrics from "../WeatherMetrics/WeatherMetrics.jsx";
import Button from "../Button/Button.jsx";
import {useDispatch, useSelector} from "react-redux";
import {formatTodayWeatherData} from "../../utils/helper.js";
import PropTypes from "prop-types";
import {setTempUnit} from "../../store/userSlice.js";

function TodayWeather({toggleSearchBox}) {
    const dispatch = useDispatch();
    const weatherState = useSelector(state => state.weather);
    const tempUnit = useSelector(state => state.user.tempUnit);
    const formatedData = formatTodayWeatherData(weatherState?.weatherData, tempUnit);

    const toggleTempUnit = (unit) => {
        dispatch(setTempUnit(unit));
    }

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
                        <Button
                            onClick={() => {
                                toggleTempUnit("celsius")
                            }}
                            variant={`${tempUnit.toLowerCase() === "celsius" ? "primary" : "secondary"}`}>Celsius</Button>
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                toggleTempUnit("fahrenheit")
                            }}
                            variant={`${tempUnit.toLowerCase() === "fahrenheit" ? "primary" : "secondary"}`}>Fahrenheit</Button>
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
