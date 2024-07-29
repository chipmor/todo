import React from 'react';
import { ThemeProvider } from "@mui/material";

import './App.css';
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import theme from "./Theme";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header/>
                <Content/>
            </div>
        </ThemeProvider>
    );
}

export default App;
