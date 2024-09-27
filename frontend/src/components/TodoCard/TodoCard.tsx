import React, {useEffect, useRef, useState} from 'react';
import {Button, Card, CardContent, Checkbox, FormControl, Input, Typography} from "@mui/material";
import {useTodo} from "../contexts/TodoContext";

interface Todo {
  id: number | null;
  description: string | null;
}

interface TodoComponentProps {
  todo: Todo;
  // createNewTodo?: (todo: Partial<Todo>) => Promise<void>;
}


const TodoCard = (props: TodoComponentProps) => {
  const {todo} = props;
  const [description, setDescription] = useState(todo?.description);
  const [isEditing, setIsEditing] = useState(!props.todo);

  const {getAllTodos, updateTodo, deleteTodo} = useTodo();
  const inputRef = useRef(null);

  const handleDelete = async () => {
    await deleteTodo(props.todo.id);
    await getAllTodos();
  }

  const handleSave = async () => {
    if (todo.id) {
      console.log(description)
      await updateTodo({id: todo.id, description});
      setIsEditing(false);
    }
  }

  const handleEdit = (e: React.MouseEvent) => {
    // e.preventDefault();
    // e.stopPropagation();
    console.log('enter')
    setIsEditing(true);
  }

  const handleLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('leave')
    if (inputRef.current) {

    }
    setIsEditing(false);
  }

  return (
    <Card sx={{margin: "4px 0"}}>
      <CardContent sx={{display: 'flex'}}>
        <Checkbox />
        {isEditing &&
          <>
            <Input
              fullWidth
              value={description}
              ref={inputRef}
              onChange={(e) => setDescription(e.target.value)}/>
            <Button variant="outlined" onClick={handleSave}>Save</Button>
          </>
        }
        {!isEditing &&
          <span style={{width: "100%", alignContent: "center"}} onClick={handleEdit}>
            {description}
          </span>
        }
      </CardContent>
    </Card>
  )
    ;
};

export {
  TodoCard,
  Todo
};
