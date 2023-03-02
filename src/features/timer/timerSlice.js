import { createSlice } from "@reduxjs/toolkit";

export const timerSlice = createSlice({
  name: "timer",
  initialState: { value: 0, isPlaying: false },
  reducers: {
    increaseTimer: (state) => {
      state.value = state.value + 30;
    },
    decreaseTimer: (state) => {
      if (state.value === 0) {
        alert(
          "Wait! You are trying to decrease the amount of the timer but currently is set to 0."
        );
      } else {
        state.value = state.value - 30;
      }
    },
    startTimer: (state) => {
      if (state.value === 0) {
        alert("You can't start the timer if it's set to 0!");
      } else {
        state.isPlaying = true;
      }
    },
    resetTimer: (state) => {
      state.value = 0;
      state.isPlaying = false;
    },
  },
});

export const { increaseTimer, decreaseTimer, startTimer, resetTimer } =
  timerSlice.actions;
export default timerSlice.reducer;
