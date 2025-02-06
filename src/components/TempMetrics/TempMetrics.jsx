import styles from './TempMetrics.module.css';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {convertTempMetrics} from "../../utils/helper.js";

function TempMetrics({temp}) {
    const tempUnit = useSelector(state => state.user.tempUnit);
    return (<div className={styles.container}>
        <h3 className="">
            <span className={styles.tempMetrics}>{temp}<span className={styles.degree}>&#176;</span></span>
            <span className={styles.subTempMetrics}>
                {tempUnit === "celsius" ? ("C") : "F"}
            </span>
        </h3>

    </div>);
}

export default TempMetrics;

TempMetrics.propTypes = {
    temp: PropTypes.number.isRequired,
}
