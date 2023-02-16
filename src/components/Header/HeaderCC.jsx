import React from 'react';
import { Link } from 'react-router-dom';

import LINKS from './config';
import { Nav, NavItem, Title, Wrapper } from './styled';

class Header extends React.Component {
    render() {
        const { children } = this.props;
        return (
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
    }
}

export default Header;
