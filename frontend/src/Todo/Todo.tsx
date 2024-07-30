import React, {useState} from 'react';
import {Button, FormControl, Input, Typography} from "@mui/material";
import styled from "@emotion/styled";

interface Todo {
    id: number | null;
    title: string | null;
    description: string | null;
}

const TodoContainer = styled("div")({
    display: "flex",
    padding: "8px",
    marginBottom: "2em",
    outline: "1px solid grey",
    position: "relative"
});

const TodoComponent = (props: Todo) => {
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [isEditing, setIsEditing] = useState(!props.id);

    const toggleEdit = () => {
        setIsEditing(isEditing => !isEditing);
    }

    const deleteTodo = () => {

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
                        <Input value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </FormControl>
                    <FormControl fullWidth={true}>
                        <Input value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </FormControl>
                </div>
            )}
            {/*<EditableField isEditing={isEditing} name={"Title: "} value={title} setValue={setTitle}/>*/}
            {/*<EditableField isEditing={isEditing} name={"Description: "} value={description} setValue={setDescription}/>*/}
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                position: "absolute",
                right: "0",

            }}>
                <Button color="primary" onClick={toggleEdit}>{isEditing ? 'Save' : 'Edit'}</Button>
                <Button color="warning" onClick={deleteTodo}>Delete</Button>
            </div>
        </TodoContainer>
    );
};

export {
    Todo,
    TodoComponent
};
