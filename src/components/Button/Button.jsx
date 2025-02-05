import styles from "./Button.module.css";
import PropTypes from "prop-types";


const Button = ({variant = "primary", children, ...props}) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} {...props}>
            {children}
        </button>
    );
};

export default Button;

Button.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.node,
}

