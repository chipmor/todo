import {Todo} from "../components/TodoCard/TodoCard";
import React, {createContext} from "react";

interface TodoContextInterface {
    todos: any[];
    getAllTodos: () => Promise<void>;
    createTodo: (description: string) => Promise<void>;
    updateTodo: (todo: Todo) => Promise<void>;
    deleteTodo: (id: number) => Promise<void>;
}

const defaultTodoContext: TodoContextInterface = {
    todos: [],
    getAllTodos: () => Promise.resolve(),
    createTodo: (description: string) => Promise.resolve(),
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