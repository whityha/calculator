import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherFC';

import { LINKS_FC } from './config';
import { Nav, NavItem, Title, WrapperHeader } from './styled';

const Header = () => (
    <WrapperHeader>
        <Title>FUNCTIONAL COMPONENTS CALCULATOR</Title>
        <Nav>
            {LINKS_FC.map(({ path, text }) => (
                <NavItem key={path}>
                    <Link to={path}>{text}</Link>
                </NavItem>
            ))}
        </Nav>
        <Switcher />
    </WrapperHeader>
);

export default Header;
