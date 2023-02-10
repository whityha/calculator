import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CC_PATH, DEFAULT_PATH, FC_PATH } from '@constants/paths';
import { ThemeProvider } from 'styled-components';

import StartPage from '../pages/StartPage/StartPage';
import GlobalStyles from '../styled/globalStyles';
import theme from '../styled/theme';

const HomeFC = React.lazy(() => import('../pages/Home/HomeFC'));
const HomeCC = React.lazy(() => import('../pages/Home/HomeCC'));

const ROUTES = [
    { path: DEFAULT_PATH, element: <StartPage /> },
    { path: CC_PATH, element: <HomeCC /> },
    { path: FC_PATH, element: <HomeFC /> },
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
