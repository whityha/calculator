import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import AppFunc from './pages/AppFunc';
import GlobalStyles from './styles/global';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<StartPage color="black" />} />
                {/* <Route path="/class" element={<AppClass />} /> */}
                <Route path="/function" element={<AppFunc />} />
            </Routes>
            <GlobalStyles />
        </>
    );
};

export default App;
