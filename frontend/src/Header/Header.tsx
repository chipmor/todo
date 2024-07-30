import React from 'react';
import {Button, Typography} from "@mui/material";
import styled from "@emotion/styled";

const HeaderContent = styled("div")({
    display: "flex",
    padding: "1em 2em",
    backgroundColor: "#CCD7E1FF",
    height: "15vh",
    color: "black",
    alignItems: "center",
    justifyContent: "space-between",
});

const Header = () => {
    // const {isLoggedIn} = useContext(AuthContext);
    const isLoggedIn = false;
    return (
        <HeaderContent>
            <Typography variant="h4">Todo Or Not Todo</Typography>
            <Button size="large" variant="outlined" color="primary">
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </Button>
        </HeaderContent>
    );
}

export {
    Header
}