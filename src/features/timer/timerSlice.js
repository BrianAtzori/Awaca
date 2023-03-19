import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        toast(
          "Close your eyes. Breathe slowly and deeply, let the relaxation begin."
        );
      }
    },
    resetTimer: (state) => {
      if (state.isPlaying) {
        state.value = 0;
        state.isPlaying = false;
      }
    },
    pauseTimer: (state) => {
      state.isPlaying ? (state.isPlaying = false) : (state.isPlaying = true);
    },
  },
});

export const {
  increaseTimer,
  decreaseTimer,
  startTimer,
  resetTimer,
  pauseTimer,
} = timerSlice.actions;
export default timerSlice.reducer;
