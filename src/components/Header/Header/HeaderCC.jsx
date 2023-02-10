import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PATH, FC_PATH } from '@constants/paths';

import Switcher from '../Switcher/SwitcherCC';

import { Nav, Title, WrapperHeader } from './styled';

class Header extends React.Component {
    render() {
        return (
            <WrapperHeader>
                <Title>CLASS COMPONENTS CALCULATOR</Title>
                <Nav>
                    <li>
                        <Link to={DEFAULT_PATH}>Main</Link>
                    </li>
                    <li>
                        <Link to={FC_PATH}>Functional calculator</Link>
                    </li>
                </Nav>
                <Switcher />
            </WrapperHeader>
        );
    }
}

export default Header;
