import React, {useEffect, useState} from "react";
import TodoContext from "./TodoContext";
import axios from "axios";

const TodoProvider = ({children}) => {
    const urlBase = "http://localhost:8000";
    const [todos, setTodos] = useState([]);

    const getAllTodos = async () => {
        try{
            const response = await axios.get(urlBase + '/api/todo');
            console.log(response.data);
            setTodos(response.data?.todos);
        } catch (e: any) {
            console.error('there was an error fetching the data');
        }
    }

    const value = {
        todos,
        setTodos,
        getAllTodos
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    return <TodoContext.Provider value={value}>
        {children}
    </TodoContext.Provider>

}
export default TodoProvider;