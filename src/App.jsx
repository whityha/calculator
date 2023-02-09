import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StartPage from './pages/StartPage';
import GlobalStyles from './styles/global';
import theme from './styles/theme';

const AppFunc = React.lazy(() => import('./pages/AppFunc'));
const AppClass = React.lazy(() => import('./pages/AppClass'));

const App = () => {
    const variant = useSelector(({ control }) => control.theme);
    return (
        <ThemeProvider theme={theme[variant]}>
            <Suspense>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/class" element={<AppClass />} />
                    <Route path="/function" element={<AppFunc />} />
                </Routes>
            </Suspense>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
