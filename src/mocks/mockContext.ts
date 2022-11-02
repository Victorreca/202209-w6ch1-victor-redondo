import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../redux/features/taskSlice";

const mockStore = () => {
  return configureStore({
    reducer: {
      tasksToDo: tasksReducer,
    },
  });
};

export default mockStore;
