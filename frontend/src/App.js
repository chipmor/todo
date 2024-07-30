import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from "@mui/material";

import './App.css';
import { Header } from "./Header/Header";
import { Content } from "./Content/Content";
import theme from "./Theme";
import TodoProvider from "./contexts/TodoProvider";


// const defaultAuthContext = {isLoggedIn: false, emailAddress: ""}
// const AuthContext = createContext(defaultAuthContext);
// const AuthProvider = ({ children }) => {
//
//     const [todos, setTodos] = useState([]);
//     return <AuthContext.Provider value={{ todos }}></AuthContext.Provider>
// }

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            {/*<AuthContext.Provider value={defaultAuthContext}>*/}
            <TodoProvider>
                <div className="App">
                    <Header/>
                    <Content/>
                </div>
            </TodoProvider>
            {/*</AuthContext.Provider>*/}
        </ThemeProvider>
    );
}

export default App;