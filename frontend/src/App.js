import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from "@mui/material";

import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import theme from "./Theme";
import TodoProvider from "./contexts/TodoProvider";


const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <TodoProvider>
                <div>
                    <Header/>
                    <Content/>
                </div>
            </TodoProvider>
        </ThemeProvider>
    );
}

export default App;