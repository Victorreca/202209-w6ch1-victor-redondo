import List from "./List";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import mockStore from "../mocks/mockContext";

describe("Given a List component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a level 1 heading with the title 'Todo List'", () => {
      render(
        <Provider store={mockStore()}>
          <List />
        </Provider>
      );

      const heading = screen.queryByRole("heading", {
        level: 1,
        name: "Por hacer",
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
