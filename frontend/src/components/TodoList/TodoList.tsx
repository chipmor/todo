import React from "react";
import {Todo, TodoCard} from "../TodoCard/TodoCard";
import {Button, Typography} from "@mui/material";
interface TodoListProps {
  todos: Todo[];
  getAllTodos: () => Promise<void>;
}
const TodoList = (props: TodoListProps) => {
  const {todos, getAllTodos} = props;
  const [newTodo, setNewTodo] = React.useState<Partial<Todo>>(null);

  const toggleAdd = () => {
    setNewTodo(!newTodo ? {id: null, description: "", completed: false} : null);
  }

  const resetTodos = async () => {
    await getAllTodos();
    setNewTodo(null);
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography variant="h3">My To-Do List</Typography>
        {newTodo
          ? <Button color="error" onClick={toggleAdd} style={{marginRight: "1em"}}>Remove</Button>
          : <Button onClick={toggleAdd} style={{marginRight: "1em"}}>Add Todo</Button>}

      </div>
      <div>
        {newTodo && <TodoCard todo={newTodo} resetTodos={resetTodos}/>}
        {todos.map(({id, description, completed}: Todo) => {
          return <TodoCard key={id} todo={{id, description, completed}} resetTodos={resetTodos}/>
        })}
      </div>
    </div>
  )
}

export default TodoList;