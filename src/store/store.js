import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as timerReducer } from "./Slices/timerSlice";
import { reducer as counterReducer } from "./Slices/counterSlice";

const rootReducer = combineReducers({
  timer: timerReducer,
  counter: counterReducer
})

const store = configureStore({
  reducer: rootReducer
});

export default store;