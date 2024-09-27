import React from "react";
import {useTodo} from "../contexts/TodoContext";
import {Todo, TodoCard} from "../TodoCard/TodoCard";
import {Button, Typography} from "@mui/material";

const TodoList = () => {

  const [newTodo, setNewTodo] = React.useState(false);
  const {todos, createTodo} = useTodo();

  const toggleAdd = () => {
    setNewTodo(newTodo => !newTodo);
  }

  const saveNewTodo = async (todo: Partial<Todo>) => {
    const {description} = todo;
    await createTodo({description});
    setNewTodo(false);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h3">My To-Do List</Typography>
        <Button onClick={toggleAdd} style={{marginRight: "1em"}}>Add Todo</Button>
      </div>
      <div>
        {todos.map(({id, description, completed}: Todo) => {
          return <TodoCard
            key={id}
            todo={{id, description, completed}} />
        })}
      </div>
    </div>
  )
}

export default TodoList;