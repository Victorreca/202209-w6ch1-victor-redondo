import List from "./components/List";
import { loadTasksActionCreator } from "./redux/features/taskSlice";
import React, { useEffect } from "react";
import task from "./data/tasks";
import { useAppDispatch } from "./redux/slices/hooks";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadTasksActionCreator(task));
  }, [dispatch]);
  return (
    <div className="app">
      <header className="app-header"></header>
      <List />
    </div>
  );
};

export default App;
