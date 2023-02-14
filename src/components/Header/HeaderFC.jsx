import React from 'react';
import { Link } from 'react-router-dom';

import LINKS from './config';
import { Nav, NavItem, Title, WrapperHeader } from './styled';

const Header = () => (
    <WrapperHeader>
        <Title>CALCULATOR</Title>
        <Nav>
            {LINKS.map(({ path, text }) => (
                <NavItem key={path}>
                    <Link to={path}>{text}</Link>
                </NavItem>
            ))}
        </Nav>
    </WrapperHeader>
);

export default Header;
