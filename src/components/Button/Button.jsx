import styles from "./Button.module.css";


const Button = ({variant = "primary", children, ...props}) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} {...props}>
            {children}
        </button>
    );
};

export default Button;

// type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
//     variant?: "primary" | "secondary" | "danger";
// };
