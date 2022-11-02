import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "../redux/features/taskSlice";

const mockStore = () => {
  return configureStore({
    reducer: {
      tasks: tasksReducer,
    },
  });
};

export default mockStore;
