import { createSlice } from "@reduxjs/toolkit";

export const loaderSlice = createSlice({
  name: "loader",
  initialState: { value: true},
  reducers: {
    stopLoading: (state) => {
      state.value = false
    },
  },
});

export const { stopLoading } =
  loaderSlice.actions;
export default loaderSlice.reducer;
