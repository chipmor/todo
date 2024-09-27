import React, {useRef, useState} from 'react';
import {Button, Card, CardContent, Checkbox, Input} from "@mui/material";
import {useTodo} from "../contexts/TodoContext";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoComponentProps {
  todo: Todo;
}


const TodoCard = (props: TodoComponentProps) => {
  const {todo} = props;
  const [description, setDescription] = useState(todo?.description);
  const [isDone, setIsDone] = useState(todo?.completed);
  const [isEditing, setIsEditing] = useState(!props.todo);
  const inputRef = useRef(null);

  const {getAllTodos, updateTodo, deleteTodo} = useTodo();


  const handleDelete = async () => {
    await deleteTodo(props.todo.id);
    await getAllTodos();
  }

  const handleSave = async () => {
    if (todo.id) {
      await updateTodo({id: todo.id, description, completed: isDone});
      setIsEditing(false);
    }
  }

  const handleEdit = (e: React.MouseEvent) => {
    setIsEditing(true);
  }

  const updateDone = async () => {
    if (todo.id) {
      await updateTodo({id: todo.id, description, completed: !isDone});
    }
    setIsDone(isDone => !isDone);

  }

  return (
    <Card sx={{margin: "4px 0"}}>
      <CardContent sx={{display: 'flex'}}>
        <Checkbox checked={isDone} value={isDone} onChange={updateDone}/>
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
