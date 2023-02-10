import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherCC';

import { StyledNav, StyledTitle, WrapperHeader } from './styled';

class Header extends React.Component {
    render() {
        return (
            <WrapperHeader>
                <StyledTitle>CLASS COMPONENTS CALCULATOR</StyledTitle>
                <StyledNav>
                    <li>
                        <Link to="../">Main</Link>
                    </li>
                    <li>
                        <Link to="../function">Functional calculator</Link>
                    </li>
                </StyledNav>
                <Switcher />
            </WrapperHeader>
        );
    }
}

export default Header;
