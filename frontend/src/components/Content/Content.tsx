import React from "react";
import {Todo, TodoComponent} from '../Todo/Todo';
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";
import {useTodo} from "../contexts/TodoContext";

const ContentContainer = styled("div")({
  margin: "1em",
  flex: 1,
  display: "flex"
});


const Content = () => {

  return (
    <ContentContainer>
      <Sidebar/>
      <TodoList/>
    </ContentContainer>

  )
}

const TodoList = () => {

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
    <>
      <div style={{display: "flex"}}>
        <Typography variant="h2">My To-Do List</Typography>
        <Button onClick={toggleAdd} style={{marginRight: "1em"}}>Add Todo</Button>
      </div>
      {newTodo && <TodoComponent todo={null}
                                 createNewTodo={(todo: Partial<Todo>) => saveNewTodo(todo)}/>
      }
      {todos.map(({id, title, description}: Todo) => {
        return <TodoComponent
          key={id}
          todo={{id, title, description}}/>
      })
      }
    </>
  )
}

const Sidebar = (): React.ReactElement => {
  const SidebarContainer = styled('div')({
    display: "flex",
    flexDirection: "column"
  });

  const switchList = (id: number) => {
    return "not implemented";
  }

  const lists = [{id: 1, title: "Grocery"}, {id: 2, title: "Chores"}];

  return (
    <SidebarContainer>
      <Typography variant="h3">My Lists</Typography>
      <div>
        {lists.map(({id, title}) => {
          return <Button variant="outlined" onClick={() => switchList(id)}>
            <Typography variant="body1">{title}</Typography>
          </Button>
        })}
      </div>

    </SidebarContainer>
  );
}

export {Content};