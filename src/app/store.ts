import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { tasksReducer } from "../store/features/taskSlice";

export const store = configureStore({
  reducer: {
    taskListReducer: tasksReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
