import React from 'react';
import { Link } from 'react-router-dom';
import { CC_PATH, DEFAULT_PATH } from '@constants/paths';

import Switcher from '../Switcher/SwitcherFC';

import { StyledNav, StyledTitle, WrapperHeader } from './styled';

const Header = () => (
    <WrapperHeader>
        <StyledTitle>FUNCTIONAL COMPONENTS CALCULATOR</StyledTitle>
        <StyledNav>
            <li>
                <Link to={DEFAULT_PATH}>Main</Link>
            </li>
            <li>
                <Link to={CC_PATH}>Class calculator</Link>
            </li>
        </StyledNav>
        <Switcher />
    </WrapperHeader>
);

export default Header;
