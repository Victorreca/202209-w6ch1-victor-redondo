import { createSlice } from "@reduxjs/toolkit";
import typesTasks from "../../types";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: typesTasks[];
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
      action: PayloadAction<typesTasks[]>
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

export const {
  loadTasks: loadTasksActionCreator,
  removeTasks: removeTasksActionCreator,
} = tasksSlice.actions;
