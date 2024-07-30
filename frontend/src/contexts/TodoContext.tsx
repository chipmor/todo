import {Todo} from "../Todo/Todo";
import React, {createContext} from "react";

interface TodoContextInterface {
    todos: any[];
    setTodos: React.Dispatch<React.SetStateAction<any[]>>;
    getAllTodos: () => Promise<void>;
}

const defaultTodoContext: TodoContextInterface = {
    todos: [],
    setTodos: (todos: Todo[]) => {},
    getAllTodos: () => Promise.resolve(),
};

const TodoContext = createContext<TodoContextInterface>(defaultTodoContext);

const useTodos = () => React.useContext(TodoContext);
export {
    useTodos,
    defaultTodoContext
}
export default TodoContext;