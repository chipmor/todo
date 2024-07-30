import React from "react";
import {Todo, TodoComponent} from '../Todo/Todo';
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import {useTodos} from "../contexts/TodoContext";

const ContentContainer = styled("div")({
    margin: "1em",
});


const Content = () => {
    const [newTodo, setNewTodo] = React.useState(false);

    const { todos} = useTodos();
    return (
        <ContentContainer>
            <div style={{display: "flex"}}>
                <Typography variant="h5">My To-Do List</Typography>
                <Button onClick={() => setNewTodo(true)} style={{marginRight: "1em"}}>Add Todo</Button>
            </div>
            {newTodo && <TodoComponent id={null} title={null} description={null} /> }
            {todos.map((todo: Todo) => {
                const {id, title, description} = todo;

                return <TodoComponent
                    key={id}
                    id={id}
                    title={title}
                    description={description}/>
            })}
        </ContentContainer>

    )
}

export {Content};