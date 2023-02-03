import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Switcher from './Switcher';

const StyledHeader = styled.header`
    display: flex;
    grid-area: header;
    align-items: center;
`;

const StyledTitle = styled.h2`
    text-shadow: 0px 0px 10px ${(props) => props.theme.color.primary};
    color: ${(props) => props.theme.color.primary};
    margin-right: auto;
`;

const StyledNav = styled.nav`
    display: flex;
    gap: 1rem;
    font-size: 1rem;
    margin-right: 100px;
    li {
        color: ${(props) => props.theme.color.primary};
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <StyledTitle>FUNCTIONAL COMPONENTS CALCULATOR</StyledTitle>
            <StyledNav>
                <li>
                    <Link to="../">Главная</Link>
                </li>
                <li>
                    <Link to="../class">Классовый калькулятор</Link>
                </li>
            </StyledNav>
            <Switcher />
        </StyledHeader>
    );
};

export default Header;
