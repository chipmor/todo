import React from 'react';
import { ThemeProvider } from "@mui/material";

import { Header } from "./components/Header/Header";
import { Content } from "./components/Content/Content";
import theme from "./Theme";
import TodoProvider from "./contexts/TodoProvider";
import Footer from './components/Footer/Footer';
import styled from '@emotion/styled';


const App = () => {
  const PageWrapper = styled('div')({
    display: 'flex',
    height: '100vh',
    flexDirection: 'column'
  });

    return (
        <ThemeProvider theme={theme}>
            <TodoProvider>
                <PageWrapper>
                    <Header/>
                    <Content/>
                    <Footer />
                </PageWrapper>
            </TodoProvider>
        </ThemeProvider>
    );
}

export default App;