import React from "react";
import {Todo, TodoComponent} from '../Todo/Todo';
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import {useTodo} from "../contexts/TodoContext";

const ContentContainer = styled("div")({
    margin: "1em",
});


const Content = () => {
    const [newTodo, setNewTodo] = React.useState(false);
    const {todos, createTodo} = useTodo();

    const toggleAdd = () => {
        setNewTodo(newTodo => !newTodo);
    }

    const saveNewTodo = async (todo: Partial<Todo>) => {
        const {title, description} = todo;
        await createTodo({title, description});
        setNewTodo(false);
    }

    return (
        <ContentContainer>
            <div style={{display: "flex"}}>
                <Typography variant="h5">My To-Do List</Typography>
                <Button onClick={toggleAdd} style={{marginRight: "1em"}}>Add Todo</Button>
            </div>
            {newTodo && <TodoComponent todo={null}
                                       createNewTodo={(todo: Partial<Todo>) => saveNewTodo(todo)}/>}
            {todos.map(({id, title, description}: Todo) => {
                return <TodoComponent
                    key={id}
                    todo={{id, title, description}}/>
            })}
        </ContentContainer>

    )
}

export {Content};