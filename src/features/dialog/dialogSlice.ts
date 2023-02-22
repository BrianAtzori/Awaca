import { createSlice } from "@reduxjs/toolkit";

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState: { value: true },
    reducers: {
        hideDialog: (state) => {
            // console.log(state.value)
            state.value = false
            // console.log(state.value)
        }
    }
})

export const {hideDialog} = dialogSlice.actions
export default dialogSlice.reducer