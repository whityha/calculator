import React from 'react';
import { Link } from 'react-router-dom';
import { CC_PATH, DEFAULT_PATH } from '@constants/paths';

import Switcher from '../Switcher/SwitcherFC';

import { Nav, Title, WrapperHeader } from './styled';

const Header = () => (
    <WrapperHeader>
        <Title>FUNCTIONAL COMPONENTS CALCULATOR</Title>
        <Nav>
            <li>
                <Link to={DEFAULT_PATH}>Main</Link>
            </li>
            <li>
                <Link to={CC_PATH}>Class calculator</Link>
            </li>
        </Nav>
        <Switcher />
    </WrapperHeader>
);

export default Header;
