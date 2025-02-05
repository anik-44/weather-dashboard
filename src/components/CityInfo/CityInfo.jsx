import {PinLocation03Icon, SunriseIcon, SunsetIcon} from "hugeicons-react";
import styles from "./CityInfo.module.css";
import PropTypes from "prop-types";

function CityInfo({cityName, countryCode, date, sunSet, sunRise}) {
    return (<div className={styles.container}>
        {/*first Col*/}
        <div className={styles.firstColContainer}>
            <div className={styles.paraContainer}>
				<span className={styles.IconSpan}>
                    <PinLocation03Icon size={18} color={"white"}/>
				</span>
                <p className={styles.para}>
                    {cityName},{countryCode}
                </p>
            </div>
            <div>
                <p className={styles.dateInfoPara}>{date}</p>
            </div>

        </div>
        {/*second Col*/}
        <div className={styles.secondColContainer}>
            <div className={styles.paraContainer}>
                <span className={styles.IconSpan}>
                    <SunriseIcon size={18} color={"white"}/>
                </span>
                <p className={styles.para}>
                    {sunRise}
                </p>
            </div>
            <div className={styles.paraContainer}>
                <span className={styles.IconSpan}><SunsetIcon size={18} color={"white"}/></span>
                <p className={styles.para}>{sunSet}</p>
            </div>
        </div>
    </div>);
}

export default CityInfo;

// CityInfo.propTypes = {
//     cityName: PropTypes.string.isRequired,
//     countryCode: PropTypes.string.isRequired,
//     sunRise: PropTypes.string.isRequired,
//     sunSet: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
// };
