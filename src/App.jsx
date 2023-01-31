import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />
            {/* <Route path="/class" element={<AppClass />} /> */}
            {/* <Route path="/function" element={<AppFunc />} /> */}
        </Routes>
    );
};

export default App;
