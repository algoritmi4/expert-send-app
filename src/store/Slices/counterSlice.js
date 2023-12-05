import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  isTen: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    countIncreased: (state) => {
      if (state.count + 1 >= 10) {
        return { count: 10, isTen: true }
      }
      return { ...state, count: state.count + 1 };
    },
    initialCountSetted: () => ({
      count: 0, isTen: false,
    })
  }
})

export const { actions, reducer } = counterSlice;