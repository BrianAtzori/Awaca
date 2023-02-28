import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: { value: 0 },
  reducers: {
    increaseTimer: (state) => {
      //   console.log(state.value);

      state.value = (state.value + 1);

      console.log(state.value);
    },
    decreaseTimer: (state) => {
      if (state.value === 0) {
        alert(
          "Wait! You are trying to decrease the amount of the timer but curently is set to 0."
        );
      } else {
        state.value = state.value - 1;
      }
    },
  },
});

export const { increaseTimer, decreaseTimer } = timerSlice.actions;
export default timerSlice.reducer;
