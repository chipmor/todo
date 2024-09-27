import React from 'react';
import {Todo, TodoCard} from "./TodoCard";
import {fireEvent, render, screen} from "@testing-library/react";

const renderTodo = (todo: Todo, callback = undefined) => {
  render(<TodoCard todo={todo} />);
}

describe('Todo Component', () => {
  it('renders expected props and buttons by default in view mode', () => {
    const id = 1;
    const title = "test title";
    const description = "test description";
    const completed = false;

    renderTodo({id, description, completed});

    expect(screen.getByText(title)).toBeVisible();
    expect(screen.getByText(description)).toBeVisible();

    expect(screen.getByRole('button', {name: "Edit"})).toBeVisible();
    expect(screen.getByRole('button', {name: "Delete"})).toBeVisible();
  });
  describe('edit mode', () => {
    it('enables editing when edit button is clicked', () => {
      renderTodo({id: 1, description: 'test description', completed: false});

      const editButton = screen.getByRole('button', {name: /Edit/i});
      expect(editButton).toBeVisible();
      fireEvent.click(editButton);

      const saveButton = screen.getByRole('button', {name: /Save/i});
      expect(saveButton).toBeVisible();
      const titleInput = screen.getByRole('textbox', {name: /Title/i});
      expect(titleInput).toBeVisible();
      const descriptionInput = screen.getByRole('textbox', {name: /Description/i});
      expect(descriptionInput).toBeVisible();
    });
  });
});