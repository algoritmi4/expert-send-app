import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: 30,
  isZero: false,
}

const timerSlice = createSlice({
  name: 'timer',
  initialState: initialState,
  reducers: {
    timeSetted: (state, { payload: timeToSet }) => {
      if (state.time - timeToSet <= 0) {
        return { time: state - timeToSet, isZero: true }
      }

      return { ...state, time: state.time - timeToSet };
    },
    initialTimeSetted: () => ({
      time: 30, isZero: false,
    })
  }
})

export const { actions, reducer } = timerSlice;