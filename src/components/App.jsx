import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Loader from '@components/Loader';
import theme from '@styled/theme/theme';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styled/globalStyles';

import ROUTES from './config';
import ErrorBoundary from './ErrorBoundary';
import StyledApp from './styled';

const App = () => {
    const currentTheme = useSelector(({ control }) => control.theme);
    return (
        <ThemeProvider theme={theme[currentTheme]}>
            <ErrorBoundary>
                <StyledApp>
                    <Suspense fallback={<Loader />}>
                        <Routes>
                            {ROUTES.map(({ path, element }) => (
                                <Route
                                    key={path}
                                    path={path}
                                    element={element}
                                />
                            ))}
                        </Routes>
                    </Suspense>
                </StyledApp>
                <GlobalStyles />
            </ErrorBoundary>
        </ThemeProvider>
    );
};
export default App;
