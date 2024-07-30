import React from 'react';
import {Todo, TodoComponent} from "./Todo";
import {fireEvent, render, screen} from "@testing-library/react";

const renderTodo = (todo: Todo, callback = undefined) => {
    render(<TodoComponent todo={todo} createNewTodo={callback} />);
}

describe('Todo Component', () => {
    it('renders expected props and buttons by default in view mode', () => {
        const id = 1;
        const title = "test title";
        const description = "test description";

        renderTodo({id, title, description});

        expect(screen.getByText(title)).toBeVisible();
        expect(screen.getByText(description)).toBeVisible();

        expect(screen.getByRole('button', { name: "Edit" })).toBeVisible();
        expect(screen.getByRole('button', { name: "Delete" })).toBeVisible();
    });
    describe('edit mode', () => {
        it('enables editing when edit button is clicked',() => {
            renderTodo({id: 1, title: 'test title', description: 'test description'});

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