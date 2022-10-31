import { createSlice } from "@reduxjs/toolkit";
import types from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: types[];
}

const tasksInitialState: TaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    loadTasks: (
      currentTasksState,
      action: PayloadAction<types[]>
    ): TaskState => ({
      ...currentTasksState,
      tasks: [...action.payload],
    }),
    removeTasks: (
      currentTasksState,
      action: PayloadAction<number>
    ): TaskState => ({
      ...currentTasksState,
      tasks: currentTasksState.tasks.filter(
        (task) => task.id !== action.payload
      ),
    }),
  },
});

export const tasksReducer = tasksSlice.reducer;
