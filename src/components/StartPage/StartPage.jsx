import React from 'react';
import { Link } from 'react-router-dom';

const StartPage = () => {
    return (
        <>
            <h1>Стартовая страница</h1>
            <Link to="class">
                <button type="button">КЛАССОВЫЙ КАЛЬКУЛЯТОР</button>
            </Link>
            <Link to="function">
                <button type="button">ФУНКЦИОНАЛЬНЫЙ КАЛЬКУЛЯТОР</button>
            </Link>
        </>
    );
};

export default StartPage;
