import tasks from "../../data/tasks";
import {
  tasksReducer,
  loadTasksActionCreator,
  tasksInitialState,
} from "./taskSlice";

describe("Given the tasksReducer function", () => {
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
  });
});
