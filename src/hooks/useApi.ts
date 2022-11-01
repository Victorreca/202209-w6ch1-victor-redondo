import { useDispatch } from "react-redux";
import typesTasks from "../types";
import { loadTasksActionCreator } from "../redux/features/taskSlice";
import { useCallback } from "react";

const useApi = () => {
  const apiUrl = process.env.REACT_APP_API_URL_LISTAPI;
  const dispatch = useDispatch();

  const loadTasksApi = useCallback(async () => {
    const response = await fetch(`${apiUrl}`);
    const tasksApi: typesTasks[] = await response.json();

    dispatch(loadTasksActionCreator(tasksApi));
  }, [apiUrl, dispatch]);
  return { loadTasksApi };
};

export default useApi;
