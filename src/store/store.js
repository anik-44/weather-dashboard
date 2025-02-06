import {configureStore} from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import userReducer from './userSlice';

const store = configureStore({
    reducer: {
        weather: weatherReducer, user: userReducer
    },

});

export default store;
