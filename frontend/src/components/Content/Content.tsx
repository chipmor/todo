import React from "react";
import styled from "@emotion/styled";
import TodoList from "../TodoList/TodoList";
import Sidebar from "../Sidebar/Sidebar";

const ContentContainer = styled("div")({
  margin: "1em 1em 0 1em",
  flex: 1,
  display: "flex",
  gap: "24px"
});


const Content = () => {
  return (
    <ContentContainer>
      <Sidebar/>
      <TodoList/>
    </ContentContainer>
  )
}


export {Content};