import React, { useEffect, useState } from "react";
import axios from "axios";
import { Todo } from '../Todo/Todo';

const Content = () => {
    const [todos, setTodos] = useState<Todo[]>([]);


    useEffect(() => {
        axios.get('/api/todos').then((response) => {
            setTodos(response.data?.todos);
        }).catch((e: any) => {
            console.error('there was an error fetching the data');
        });
    });

    return (
        <div>
            <h1>My To-Do List</h1>
            {todos.map((todo: Todo) => {
                return (<div>
                    <span>id: {todo.id}</span>
                    <span>title: {todo.title}</span>
                    <span>description: {todo.description}</span>
                </div>)
            })}
        </div>

    )
}

export { Content };