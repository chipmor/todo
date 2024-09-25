import React from 'react';
import {Typography} from "@mui/material";
import styled from "@emotion/styled";

const HeaderContent = styled("div")({
    display: "flex",
    padding: "1em 2em",
    backgroundColor: "#CCD7E1FF",
    height: "10vh",
    color: "black",
    alignItems: "center",
    justifyContent: "flex-start",
});

const Header = () => {
    return (
        <HeaderContent>
            <Typography variant="h4">Todo Or Not Todo</Typography>
        </HeaderContent>
    );
}

export {
    Header
}