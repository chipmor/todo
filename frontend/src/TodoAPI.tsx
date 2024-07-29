import axios from "axios";
import { useState } from "react";
import {Todo} from "./Todo/Todo";

const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const getAll = async () => {
        try {
          let result = await axios.get('/api/todo/');
          return result.data.todos;
        } catch(e: any) {
            console.error('Could not fetch todos')
        }
    }

    return {
        todos,
        getAll,
    }
}

export { useTodos };