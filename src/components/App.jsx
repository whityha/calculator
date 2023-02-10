import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StartPage from '../pages/StartPage/StartPage';
import GlobalStyles from '../styled/globalStyles';
import theme from '../styled/theme';

const AppFC = React.lazy(() => import('../pages/Home/AppFC'));
const AppCC = React.lazy(() => import('../pages/Home/AppCC'));

const ROUTES = [
    {
        path: '/',
        element: <StartPage />,
    },
    {
        path: '/class',
        element: <AppCC />,
    },
    {
        path: '/function',
        element: <AppFC />,
    },
];

const App = () => {
    const variant = useSelector(({ control }) => control.theme);
    return (
        <ThemeProvider theme={theme[variant]}>
            <Suspense>
                <Routes>
                    {ROUTES.map(({ path, element }) => (
                        <Route path={path} element={element} />
                    ))}
                </Routes>
            </Suspense>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
