import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherCC';

import { LINKS_CC } from './config';
import { Nav, Title, WrapperHeader } from './styled';

class Header extends React.Component {
    render() {
        return (
            <WrapperHeader>
                <Title>CLASS COMPONENTS CALCULATOR</Title>
                <Nav>
                    {LINKS_CC.map(({ path, text }) => (
                        <li key={path}>
                            <Link to={path}>{text}</Link>
                        </li>
                    ))}
                </Nav>
                <Switcher />
            </WrapperHeader>
        );
    }
}

export default Header;
