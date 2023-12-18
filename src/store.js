import { configureStore } from "@reduxjs/toolkit";
import { MapSlice } from "./reducers/Reducer";


const store = configureStore({
    reducer: {
        map: MapSlice.reducer
    }
})

export default store