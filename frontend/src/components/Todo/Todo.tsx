import React, {useState} from 'react';
import {Button, FormControl, Input, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {useTodo} from "../contexts/TodoContext";

interface Todo {
    id: number | null;
    title: string | null;
    description: string | null;
}

interface TodoComponentProps {
    todo: Todo;
    createNewTodo?: (todo: Partial<Todo>) => Promise<void>;
}

const TodoContainer = styled("div")({
    display: "flex",
    padding: "8px",
    marginBottom: "2em",
    outline: "1px solid grey",
    position: "relative"
});

const TodoComponent = (props: TodoComponentProps) => {

    const [title, setTitle] = useState(props?.todo?.title);
    const [description, setDescription] = useState(props?.todo?.description);
    const [isEditing, setIsEditing] = useState(!props.todo);

    const {getAllTodos, updateTodo, deleteTodo} = useTodo();

    const handleDelete = async () => {
        await deleteTodo(props.todo.id);
        await getAllTodos();
    }

    const handleSave = async () => {
        // if no todo it's new
        if (!props.todo) {
            await props.createNewTodo({title, description});
        } else {
            await updateTodo({id: props.todo.id, title, description});
        }
        setIsEditing(false);
        await getAllTodos();
    }

    return (
        <TodoContainer>
            <div style={{textAlign: "left", marginBottom: ".5em", marginRight: "10px", gap: "8px"}}>
                <Typography variant={"body1"}>Title:</Typography>
                <Typography variant={"body1"}>Description:</Typography>
            </div>
            {!isEditing && (
                <div style={{
                    textAlign: "left",
                    marginBottom: ".5em",
                    display: "flex",
                    flexDirection: "column",
                    width: "calc(100% - 23vh)",
                    gap: "4px"
                }}>
                    <Typography variant={"body1"}>{title}</Typography>
                    <Typography variant={"body1"}>{description}</Typography>
                </div>
            )}
            {isEditing && (
                <div style={{
                    textAlign: "left",
                    marginBottom: ".5em",
                    display: "flex",
                    flexDirection: "column",
                    width: "calc(100% - 23vh)"
                }}>
                    <FormControl fullWidth={true}>
                        <Input inputProps={{"aria-label": "title"}}
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}/>
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <Input inputProps={{"aria-label": "description"}}
                               value={description}
                               onChange={(e) => setDescription(e.target.value)}/>
                    </FormControl>
                </div>
            )}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                position: "absolute",
                right: "0",

            }}>
                {!isEditing
                    ? (<Button
                        color="primary"
                        onClick={() => setIsEditing(isEditing => !isEditing)}>
                        Edit
                    </Button>)
                    : (<Button
                        color="primary"
                        onClick={handleSave}>
                        Save
                    </Button>)}

                <Button color="warning" onClick={handleDelete}>Delete</Button>
            </div>
        </TodoContainer>
    );
};

export {
    Todo,
    TodoComponent
};
