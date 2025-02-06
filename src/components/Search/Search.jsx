import styles from './Search.module.css';
import Button from "../Button/Button.jsx";
import {useDispatch} from "react-redux";
import {setCity} from "../../store/weatherSlice.js";
import {useState} from "react";
import PropTypes from "prop-types";

function Search({onClose}) {
    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    function handleSearch() {
        dispatch(setCity(search));
        setSearch("")
        onClose()
    }

    return (<div className={styles.container}>
        <div className={styles.headerContainer}>
            <h3>Search for:</h3>
        </div>
        <div className={styles.inputContainer}>
            <input className={styles.inputText} placeholder="City name..." value={search}
                   onChange={(e) => setSearch(e.target.value)}
                   onKeyUp={(e) => {
                       if (e.key === "Enter") {
                           handleSearch();
                       }
                   }}

            />
            <Button variant={"primary"} onClick={() => handleSearch()}>Search</Button>
        </div>

    </div>);
}

export default Search;

Search.propTypes = {
    onClose: PropTypes.func.isRequired,
}
