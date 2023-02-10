import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_PATH, FC_PATH } from '@constants/paths';

import Switcher from '../Switcher/SwitcherCC';

import { StyledNav, StyledTitle, WrapperHeader } from './styled';

class Header extends React.Component {
    render() {
        return (
            <WrapperHeader>
                <StyledTitle>CLASS COMPONENTS CALCULATOR</StyledTitle>
                <StyledNav>
                    <li>
                        <Link to={DEFAULT_PATH}>Main</Link>
                    </li>
                    <li>
                        <Link to={FC_PATH}>Functional calculator</Link>
                    </li>
                </StyledNav>
                <Switcher />
            </WrapperHeader>
        );
    }
}

export default Header;
