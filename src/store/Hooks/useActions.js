import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as timerActions } from "../Slices/timerSlice";
import { actions as counterActions } from "../Slices/counterSlice";

const rootActions = {
  ...timerActions,
  ...counterActions,
}

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}