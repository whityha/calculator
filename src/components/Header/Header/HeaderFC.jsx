import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherFC';

import { StyledNav, StyledTitle, WrapperHeader } from './styled';

const Header = () => {
    return (
        <WrapperHeader>
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
        </WrapperHeader>
    );
};

export default Header;
