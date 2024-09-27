import React from "react";
import styled from "@emotion/styled";
import {Button, Typography} from "@mui/material";

const Sidebar = (): React.ReactElement => {
  const SidebarContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
    paddingRight: '4px'
  });

  const ListContainer = styled('div')({
    borderRight: "1px solid lightgrey",
    display: "flex",
    flex: 1,
    flexDirection: "column",
  });

  const switchList = (id: number) => {
    return "not implemented";
  }

  const lists = [{id: 1, title: "Grocery"}, {id: 2, title: "Chores"}];

  return (
    <SidebarContainer>
      <Typography variant="h3">My Lists</Typography>
      <Button variant="contained">New List</Button>
      <ListContainer>
        {lists.map(({id, title}) => {
          return <Button key={id} variant="text" sx={{justifyContent: "left"}} onClick={() => switchList(id)}>
            <Typography variant="body1">{title}</Typography>
          </Button>
        })}
      </ListContainer>
    </SidebarContainer>
  );
}

export default Sidebar;