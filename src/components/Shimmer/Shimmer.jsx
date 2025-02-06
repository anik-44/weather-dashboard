import styles from "./Shimmer.module.css";

const Shimmer = ({ width = "100%", height = "20px", borderRadius = "4px" }) => {
    return <div className={styles.shimmer} style={{ width, height, borderRadius }} />;
};

export default Shimmer;
