import React from "react";
import {fireEvent, render, screen, within} from "@testing-library/react";
import TodoList from "./TodoList";
import {Todo} from "../TodoCard/TodoCard";

const renderTodoList = (todos: Todo[] = [], mockGet = jest.fn()) => {
  render(<TodoList todos={todos} getAllTodos={mockGet}/>);
}

describe("TodoList Component", () => {
  it("displays list name", () => {
    renderTodoList();
    expect(screen.getByText(/my to-do list/i)).toBeVisible();
  });
  it("displays add button", () => {
    renderTodoList();
    expect(screen.getByText(/add todo/i)).toBeVisible();
  });
  it("displays all todos", () => {
     const mockTodos = [{
      id: 1, description: "test 1", completed: true,
    }, {
      id: 2, description: "test 2", completed: true,
    }]
    renderTodoList(mockTodos);

    expect(screen.getByText("test 1")).toBeVisible();
    expect(screen.getByText("test 2")).toBeVisible();
  });
  describe("add button", () => {
    it("creates new empty todo", () => {
      renderTodoList();
      fireEvent.click(screen.getByText(/add todo/i));

      const emptyTodo = screen.getByTestId("todo-null");
      within(emptyTodo).getByRole("checkbox")
      within(emptyTodo).getByRole("textbox")
      within(emptyTodo).getByText(/save/i)
    })
  })
});