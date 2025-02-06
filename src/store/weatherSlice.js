import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    city: localStorage.getItem("city") || "New Delhi",
    weatherData: null,
    hourlyWeatherData: null,
    loading: false,
    error: null,
}

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
            localStorage.setItem("city", action.payload);
        },
        setWeatherData: (state, action) => {
            state.weatherData = action.payload;
        },
        setHourlyWeatherData: (state, action) => {
            state.hourlyWeatherData = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
})

export const {setCity, setWeatherData, setLoading, setError, setHourlyWeatherData} = weatherSlice.actions;

export default weatherSlice.reducer;
