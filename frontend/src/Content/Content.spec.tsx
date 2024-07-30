import React from 'react';
import {render, screen} from "@testing-library/react";

import {Content} from "./Content";
import TodoContext, {useTodo} from "../contexts/TodoContext";

jest.mock("../contexts/TodoContext");
const renderContent = () => {
    render(<Content/>)
};

const mockTodoProvider = () => {
    (useTodo as jest.Mock).mockReturnValue({
        todos: [{id: 1, title: 'test1', description: 'test_d1'}, {id: 2, title: 'test2', description: 'test_d2'}],
        getAllTodos: () => { // @ts-ignore
            return this?.todos
        },
    });
}

describe('Content Component', () => {
    it('renders all todos', async () => {
        const title1 = 'test1';
        const title2 = 'test2';
        const description1 = 'test_d1';
        const description2 = 'test_d2';

        mockTodoProvider();
        renderContent();

        expect(screen.getByText(title1)).toBeVisible();
        expect(screen.getByText(title2)).toBeVisible();
        expect(screen.getByText(description2)).toBeVisible();
        expect(screen.getByText(description1)).toBeVisible();
    });
});