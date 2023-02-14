import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherFC';

import { Nav, NavItem, Title, WrapperHeader } from './styled';

const Header = ({ links, children }) => (
    <WrapperHeader>
        <Title>{children}</Title>
        <Nav>
            {links.map(({ path, text }) => (
                <NavItem key={path}>
                    <Link to={path}>{text}</Link>
                </NavItem>
            ))}
        </Nav>
        <Switcher />
    </WrapperHeader>
);

export default Header;
