import { useDispatch } from "react-redux";
import typesTasks from "../types";
import { loadTasksActionCreator } from "../redux/features/taskSlice";
import { useCallback } from "react";
import { removeTasksActionCreator } from "../redux/features/taskSlice";

const useApi = () => {
  const apiUrl = process.env.REACT_APP_API_URL_LISTAPI;
  const dispatch = useDispatch();

  const loadTasksApi = useCallback(async () => {
    const response = await fetch(`${apiUrl}`);
    const tasksApi: typesTasks[] = await response.json();

    dispatch(loadTasksActionCreator(tasksApi));
  }, [apiUrl, dispatch]);

  const removeTasksApi = useCallback(
    async (id: number) => {
      let newUrlApi = `${apiUrl}/${id}`;
      const response = await fetch(newUrlApi, { method: "DELETE" });

      if (response.ok) {
        dispatch(removeTasksActionCreator(id));
      }
    },
    [apiUrl, dispatch]
  );

  return { loadTasksApi, removeTasksApi };
};

export default useApi;
