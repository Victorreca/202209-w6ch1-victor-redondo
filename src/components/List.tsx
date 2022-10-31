import { useAppSelector } from "../app/hooks";

const List = (): JSX.Element => {
  const tasks = useAppSelector(({ tasks }) => tasks.tasks);
  return (
    <ul>
      {tasks.map((task) => (
        <li>{task.name}</li>
      ))}
    </ul>
  );
};

export default List;
