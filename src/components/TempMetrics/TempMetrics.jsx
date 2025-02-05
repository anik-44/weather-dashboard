import styles from './TempMetrics.module.css';
import PropTypes from "prop-types";

function TempMetrics({temp}) {
    return (<div className={styles.container}>
        <h3 className="">
            <span className={styles.tempMetrics}>{temp}<span className={styles.degree}>&#176;</span></span>
            <span className={styles.subTempMetrics}>
                    C
            </span>
        </h3>

    </div>);
}

export default TempMetrics;

TempMetrics.propTypes = {
    temp: PropTypes.number.isRequired,
}
