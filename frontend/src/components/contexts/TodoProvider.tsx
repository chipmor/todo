import React, {useEffect, useState} from "react";
import TodoContext from "./TodoContext";
import axios from "axios";
import {Todo} from "../TodoCard/TodoCard";

const TodoProvider = ({children}) => {
  const urlBase = "http://localhost:8000";
  const [todos, setTodos] = useState([]);

  const getAllTodos = async () => {
    try {
      const response = await axios.get(urlBase + '/api/todo');
      console.log(response.data);
      setTodos(response.data?.todos);
    } catch (e: any) {
      console.error('there was an error fetching the data: ', e);
    }
  }

  const createTodo = async (todo: Partial<Todo>) => {
    try {
      await axios.post(urlBase + '/api/todo', {description: todo.description});
    } catch (error) {
      console.error('there was an error creating a new todo', error);
      throw error;
    }
  }

  const updateTodo = async (todo: Todo) => {
    try {
      await axios.put(urlBase + '/api/todo', {id: todo.id, description: todo.description, completed: todo.completed});
    } catch (e) {
      console.error('there was an error updating a todo', todo);
    }
  }

  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(urlBase + '/api/todo/' + id);
    } catch (error: any) {
      console.error('there was an error deleting a todo', error);
    }
  }

  const value = {
    todos,
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  }

  useEffect(() => {
    getAllTodos();
  }, []);

  return <TodoContext.Provider value={value}>
    {children}
  </TodoContext.Provider>

}
export default TodoProvider;