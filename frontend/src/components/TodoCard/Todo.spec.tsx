import React, {act} from 'react';
import {Todo, TodoCard} from "./TodoCard";
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import TodoContext from "../../contexts/TodoContext";

const defaultTodo: Todo = {
  id: 1,
  description: "test description",
  completed: false
}
const renderTodo = (todo: Todo = defaultTodo) => {
  render(<TodoCard todo={todo} resetTodos={jest.fn()}/>);
}

const renderWithProvider = (
  todo: Todo = defaultTodo,
  hookOverrides = {}
) => {
  const myMocks = {
    get: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    deleteFn: jest.fn(),
    ...hookOverrides
  }
  render(
    <TodoContext.Provider value={{
      todos: [],
      getAllTodos: myMocks.get,
      createTodo: myMocks.create,
      deleteTodo: myMocks.deleteFn,
      updateTodo: myMocks.update
    }}>
      <TodoCard todo={todo} resetTodos={jest.fn()}/>
    </TodoContext.Provider>)
}

describe('Todo Component', () => {
  it('displays description', () => {
    const id = 1;
    const description = "test description";
    const completed = true;
    renderTodo({id, description, completed});

    expect(screen.getByText(description)).toBeVisible();
  });
  it('displays checkbox with value', () => {
    const id = 1;
    const description = "test description";
    const completed = true;
    renderTodo({id, description, completed});

    const checkbox = screen.getByRole('checkbox');
    // @ts-ignore
    expect(checkbox.value).toBe("true");
  });
  it('displays delete button', () => {
    const id = 1;
    const description = "test description";
    const completed = true;
    renderTodo({id, description, completed});

    const deleteButton = screen.getByText(/delete/i);
    expect(deleteButton).toBeVisible();
  });

  describe("edit mode", () => {
    it("displays input for description", () => {
      renderTodo();

      const todo = screen.getByText("test description");
      fireEvent.click(todo);

      const todoInput = screen.getByRole("textbox");
      expect(todoInput).toHaveValue("test description")
    });
    it("displays save button", () => {
      renderTodo();

      const todo = screen.getByText("test description");
      fireEvent.click(todo);

      const save = screen.getByText(/save/i);
      expect(save).toBeVisible();
    });
  })

  describe("actions", () => {
    it("calls update when checkbox is clicked", async () => {
      const mockUpdate = jest.fn();
      const mockTodo: Todo = {
        id: 1,
        description: 'test',
        completed: false
      }

      renderWithProvider(mockTodo, {update: mockUpdate});

      const checkbox = screen.getByRole('checkbox');

      fireEvent.click(checkbox);
      await waitFor(() => {
        // @ts-ignore
        expect(checkbox.value).toBe("true")
      });
      expect(mockUpdate).toHaveBeenCalledWith({
        id: mockTodo.id,
        description: mockTodo.description,
        completed: !mockTodo.completed
      });
    });
    it("calls delete when delete is clicked", () => {
      const mockDelete = jest.fn();
      const mockTodo: Todo = {
        id: 1,
        description: 'test',
        completed: false
      };
      renderWithProvider(mockTodo, {deleteFn: mockDelete});

      const deleteButton = screen.getByText(/delete/i);
      fireEvent.click(deleteButton);

      expect(mockDelete).toHaveBeenCalledWith(mockTodo.id);
    });
    it("calls update when save is clicked", async () => {
      const mockUpdate = jest.fn();
      const mockTodo = {
        id: 1,
        description: "test",
        completed: true
      };

      renderWithProvider(mockTodo, {update: mockUpdate});

      const todo = screen.getByText("test");
      fireEvent.click(todo);

      const todoInput = screen.getByRole("textbox");
      fireEvent.change(todoInput, {target: {value: "updated"}});
      await act(async () => {
        fireEvent.click(screen.getByText(/save/i));
      })

      expect(mockUpdate).toBeCalledWith({
        id: mockTodo.id,
        description: "updated",
        completed: mockTodo.completed
      });
    });

  })
});