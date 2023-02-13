import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styled/globalStyles';

import ROUTES from './config';

const App = () => {
    const theme = useSelector(({ control }) => control.theme);
    return (
        <ThemeProvider theme={theme}>
            <Suspense>
                <Routes>
                    {ROUTES.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
            <GlobalStyles />
        </ThemeProvider>
    );
};
export default App;
