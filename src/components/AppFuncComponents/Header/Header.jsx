import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    grid-area: header;
    color: white;
    justify-content: space-between;
    align-items: center;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 1rem;
    font-size: 1.5rem;
`;

const Header = () => {
    return (
        <StyledHeader>
            <h2>FUNCTIONAL COMPONENTS CALCULATOR</h2>
            <StyledNav>
                <li>
                    <Link to="../">Главная</Link>
                </li>
                <li>
                    <Link to="../class">Классовый калькулятор</Link>
                </li>
            </StyledNav>
            {/* <Switcher /> */}
        </StyledHeader>
    );
};

export default Header;
