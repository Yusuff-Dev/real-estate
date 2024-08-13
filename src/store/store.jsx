import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./navbar/navSlice";

const store = configureStore({
    reducer: {
        navSlice,
    }
});

export default store;