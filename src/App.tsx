import { useAppDispatch } from "./app/hooks";
import List from "./components/List";
import { loadTasksActionCreator } from "./store/features/taskSlice";
import React, { useEffect } from "react";
import task from "./data/tasks";

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadTasksActionCreator(task));
  }, [dispatch]);
  return (
    <div className="app">
      <header className="app-header">
        <h1>Por hacer</h1>
      </header>
      <List />
    </div>
  );
};

export default App;
