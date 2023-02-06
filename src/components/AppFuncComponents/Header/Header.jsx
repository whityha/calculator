import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledHeader,
    StyledTitle,
    StyledNav,
} from '@styles/Header/Header/style';
import Switcher from './Switcher';

const Header = () => {
    return (
        <StyledHeader>
            <StyledTitle>FUNCTIONAL COMPONENTS CALCULATOR</StyledTitle>
            <StyledNav>
                <li>
                    <Link to="../">Main</Link>
                </li>
                <li>
                    <Link to="../class">Class calculator</Link>
                </li>
            </StyledNav>
            <Switcher />
        </StyledHeader>
    );
};

export default Header;
