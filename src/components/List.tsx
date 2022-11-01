import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeTasksActionCreator } from "../store/features/taskSlice";

const List = (): JSX.Element => {
  const tasks = useAppSelector(({ tasks }) => tasks.tasks);

  const dispatch = useAppDispatch();

  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <ul key={index}>
            <li>{task.name}</li>
            <button onClick={() => dispatch(removeTasksActionCreator(task.id))}>
              Elimina
            </button>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default List;
