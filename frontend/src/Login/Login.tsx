import React from "react";
import { Box, FormControl, Input, InputLabel } from "@mui/material";

const Login = () => {

    return (
    <Box>
        <FormControl>
            <InputLabel>Email address</InputLabel>
            <Input id='username' />
        </FormControl>
        <FormControl>
            <InputLabel>Password</InputLabel>
            <Input id="password" />
        </FormControl>
    </Box>
    )
};

export { Login };