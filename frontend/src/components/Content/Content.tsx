import React from "react";
import styled from "@emotion/styled";
import TodoList from "../TodoList/TodoList";
import Sidebar from "../Sidebar/Sidebar";
import {useTodo} from "../../contexts/TodoContext";

const ContentContainer = styled("div")({
  margin: "1em 1em 0 1em",
  flex: 1,
  display: "flex",
  gap: "24px"
});


const Content = () => {
  const {todos, getAllTodos} = useTodo();
  return (
    <ContentContainer>
      <Sidebar/>
      <TodoList todos={todos} getAllTodos={getAllTodos}/>
    </ContentContainer>
  )
}


export {Content};