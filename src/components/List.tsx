import { useAppSelector } from "../redux/slices/hooks";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

const List = (): JSX.Element => {
  const tasks = useAppSelector(({ tasks }) => tasks.tasks);
  const { loadTasksApi, removeTasksApi } = useApi();
  useEffect(() => {
    loadTasksApi();
  }, [loadTasksApi]);

  return (
    <div>
      {tasks.map((task, index) => (
        <ul key={index}>
          <li>{task.name}</li>
          <button onClick={() => removeTasksApi(task.id)}>Elimina</button>
        </ul>
      ))}
    </div>
  );
};

export default List;
