import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialog/dialogSlice";
import timerReducer from "./features/timer/timerSlice"

export default configureStore({
    reducer:{
        dialog: dialogReducer,
        timer: timerReducer
    },
})