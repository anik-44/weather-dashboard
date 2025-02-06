import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tempUnit: "celsius", // Default unit
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setTempUnit: (state, action) => {
            state.tempUnit = action.payload;
        }
    }
});

export const {setTempUnit} = userSlice.actions;

export default userSlice.reducer;
