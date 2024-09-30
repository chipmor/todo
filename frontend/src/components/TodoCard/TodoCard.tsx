import React, {useRef, useState} from 'react';
import {Button, Card, CardContent, Checkbox, Input} from "@mui/material";
import {useTodo} from "../../contexts/TodoContext";

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoComponentProps {
  todo: Partial<Todo>;
  resetTodos: () => Promise<void>;
}


const TodoCard = (props: TodoComponentProps) => {
  const {todo, resetTodos} = props;
  const [description, setDescription] = useState(todo?.description);
  const [isDone, setIsDone] = useState(todo?.completed);
  const [isEditing, setIsEditing] = useState(!props.todo.id);
  const inputRef = useRef(null);

  const {createTodo, updateTodo, deleteTodo} = useTodo();


  const handleDelete = async () => {
    await deleteTodo(todo.id);
    await resetTodos();
  }

  const handleSave = async () => {
    if (todo.id) {
      await updateTodo({id: todo.id, description, completed: isDone});
      setIsEditing(false);
    } else {
      await createTodo(description);
      await resetTodos();
    }
  }

  const updateDone = async () => {
    if (todo.id) {
      await updateTodo({id: todo.id, description, completed: !isDone});
    }
    setIsDone(isDone => !isDone);
  }

  return (
    <Card sx={{margin: "4px 0"}} data-testid={`todo-${todo.id}`} >
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
          <>
          <span style={{width: "100%", alignContent: "center"}} onClick={() => setIsEditing(true)}>
            {description}
          </span>
            <Button variant='outlined' color='warning' onClick={handleDelete}>Delete</Button>
          </>
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
