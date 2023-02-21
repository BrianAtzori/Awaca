import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from "./features/dialog/dialogSlice.ts";

export default configureStore({
    reducer:{
        dialog: dialogReducer
    },
})