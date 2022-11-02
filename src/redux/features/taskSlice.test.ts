import tasks from "../../data/tasks";
import {
  tasksReducer,
  loadTasksActionCreator,
  tasksInitialState,
  removeTasksActionCreator,
  TaskState,
} from "./taskSlice";

describe("Given the tasksReducer function", () => {
  const currentState: TaskState = {
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

  describe("When its invoked", () => {
    describe("And its receives the 'loadTasks' action with a list of 2 tasks", () => {
      test("Then should return a list of 2 tasks", () => {
        const loadToDoTaskListAction = loadTasksActionCreator(tasks);
        const initialStat = tasksInitialState;

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
        const newState = tasksReducer(initialStat, loadToDoTaskListAction);

        expect(newState).toStrictEqual(expectState);
      });
    });

    describe("And its receives the 'removeTasks' action", () => {
      test("Then it should return a list with the element with id 0", () => {
        const removetasks = removeTasksActionCreator(1);
        const expectState: TaskState = {
          tasks: [
            {
              id: 0,
              name: "Barrer",
              done: true,
            },
          ],
        };

        const newState = tasksReducer(currentState, removetasks);
        expect(newState).toStrictEqual(expectState);
      });
    });
  });
});
