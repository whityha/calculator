import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import LINKS from './config';
import { Nav, NavItem, Title, Wrapper } from './styled';

const Header = ({ children }) => (
    <Wrapper>
        <Title>{children}</Title>
        <Nav>
            {LINKS.map(({ path, text }) => (
                <NavItem key={path}>
                    <Link to={path}>{text}</Link>
                </NavItem>
            ))}
        </Nav>
    </Wrapper>
);

Header.propTypes = {
    children: PropTypes.string,
};

export default Header;
