import styles from './Error.module.css';
import {useSelector} from "react-redux";
import errorImage from "./../../assets/error.png"
import Button from "../Button/Button.jsx";
import PropTypes from "prop-types";

function Error({tryAgain}) {
    const error = useSelector(state => state.weather.error)
    return (
        <div className={styles.container}>
            {/*image*/}
            <div className={styles.imageContainer}>
                <img src={errorImage} alt="Error image" className={styles.errorImg}/>
            </div>
            <hr/>
            <div className={styles.errorMessageContainer}>
                <h3 className={styles.errorName}>{error.name}</h3>
                <p className={styles.errorMessage}>{error.message}</p>
                <Button onClick={tryAgain} variant={"secondary"}>Try again</Button>
            </div>
            {/*<div>*/}
            {/*</div>*/}


        </div>
    );
}

export default Error;

Error.propTypes = {
    tryAgain: PropTypes.func.isRequired,
}
