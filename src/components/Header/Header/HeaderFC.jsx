import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherFC';

import { LINKS_FC } from './config';
import { Nav, Title, WrapperHeader } from './styled';

const Header = () => (
    <WrapperHeader>
        <Title>FUNCTIONAL COMPONENTS CALCULATOR</Title>
        <Nav>
            {LINKS_FC.map(({ path, text }) => (
                <li key={path}>
                    <Link to={path}>{text}</Link>
                </li>
            ))}
        </Nav>
        <Switcher />
    </WrapperHeader>
);

export default Header;
