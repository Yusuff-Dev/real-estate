import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const navSlice = createSlice({
    initialState,
    name: 'toggle',

    reducers: {
        toggle: (state) => { 
            state.isOpen = !state.isOpen;
        }
    }
});

export default navSlice.reducer;
export const { toggle } = navSlice.actions;