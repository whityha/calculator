import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import StartPage from './pages/StartPage';
import AppFunc from './pages/AppFunc';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

const App = () => {
    const variant = useSelector((state) => state.control.theme);
    return (
        <ThemeProvider theme={theme[variant]}>
            <Routes>
                <Route path="/" element={<StartPage />} />
                {/* <Route path="/class" element={<AppClass />} /> */}
                <Route path="/function" element={<AppFunc />} />
            </Routes>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
