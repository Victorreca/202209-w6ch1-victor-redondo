import tasks from "../../data/tasks";
import {
  tasksReducer,
  loadTasksActionCreator,
  tasksInitialState,
} from "./taskSlice";

describe("Given the tasksReducer function", () => {
  describe("When it receives a 'loadTasks' action with a list of 2 tasks and an in the payload", () => {
    test("Then should return a list of 2 tasks", () => {
      const loadToDoTaskListAction = loadTasksActionCreator(tasks);
      const initialState = tasksInitialState;
      const expectState = {
        tasks: [
          {
            id: 0,
            name: "Barrer",
            done: true,
          },
          {
            id: 1,
            name: "Fregar",
            done: false,
          },
        ],
      };
      const newState = tasksReducer(initialState, loadToDoTaskListAction);
      expect(newState).toStrictEqual(expectState);
    });
  });
});
