import styles from './MetricsCard.module.css';
import PropTypes from 'prop-types';

function MetricsCard({title, data, unit}) {
    return (

        <>
            <div className={styles.container}>
                <h4 className={styles.metricTitle}>{title}</h4>
                <p className={styles.metricValue}>{data} {unit}</p>
            </div>
        </>
    );
}

export default MetricsCard;

MetricsCard.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
};
