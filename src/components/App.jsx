import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loader from '@components/Loader';
import theme from '@styled/theme/theme';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styled/globalStyles';

import ROUTES from './config';
import StyledApp from './styled';

const App = () => {
    const variant = useSelector(({ control }) => control.theme);
    return (
        <ThemeProvider theme={theme[variant]}>
            <Suspense fallback={<Loader />}>
                <StyledApp>
                    <Routes>
                        {ROUTES.map(({ path, element }) => (
                            <Route key={path} path={path} element={element} />
                        ))}
                    </Routes>
                </StyledApp>
            </Suspense>
            <GlobalStyles />
        </ThemeProvider>
    );
};
export default App;
