import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherCC';

import { Nav, NavItem, Title, WrapperHeader } from './styled';

class Header extends React.Component {
    render() {
        const { links, children } = this.props;
        return (
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
    }
}

export default Header;
