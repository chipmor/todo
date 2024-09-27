import {Todo} from "../TodoCard/TodoCard";
import React, {createContext} from "react";

interface TodoContextInterface {
    todos: any[];
    getAllTodos: () => Promise<void>;
    createTodo: (todo: Partial<Todo>) => Promise<void>;
    updateTodo: (todo: Todo) => Promise<void>;
    deleteTodo: (id: number) => Promise<void>;
}

const defaultTodoContext: TodoContextInterface = {
    todos: [],
    getAllTodos: () => Promise.resolve(),
    createTodo: (todo: Partial<Todo>) => Promise.resolve(),
    updateTodo: (todo: Todo) => Promise.resolve(),
    deleteTodo: (id: number) => Promise.resolve(),
};

const TodoContext = createContext<TodoContextInterface>(defaultTodoContext);
const useTodo = () => React.useContext(TodoContext);

export {
    useTodo,
    defaultTodoContext
}
export default TodoContext;