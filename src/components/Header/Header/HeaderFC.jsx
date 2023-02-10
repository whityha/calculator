import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherFC';

import { StyledHeader, StyledNav, StyledTitle } from './styled';

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
