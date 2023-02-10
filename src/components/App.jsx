import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import StartPage from '../pages/StartPage/StartPage';
import GlobalStyles from '../styled/globalStyles';
import theme from '../styled/theme';

const AppFC = React.lazy(() => import('../pages/AppPage/AppFC'));
const AppCC = React.lazy(() => import('../pages/AppPage/AppCC'));

const App = () => {
    const variant = useSelector(({ control }) => control.theme);
    return (
        <ThemeProvider theme={theme[variant]}>
            <Suspense>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/class" element={<AppCC />} />
                    <Route path="/function" element={<AppFC />} />
                </Routes>
            </Suspense>
            <GlobalStyles />
        </ThemeProvider>
    );
};

export default App;
