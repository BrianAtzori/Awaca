import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "./features/timer/timerSlice"
import loaderReducer from "./features/loader/loaderSlice";

export default configureStore({
    reducer:{
        timer: timerReducer,
        loader: loaderReducer
    },
})