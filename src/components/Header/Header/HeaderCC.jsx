import React from 'react';
import { Link } from 'react-router-dom';

import Switcher from '../Switcher/SwitcherCC';

import { StyledHeader, StyledNav, StyledTitle } from './styled';

class Header extends React.PureComponent {
    render() {
        return (
            <StyledHeader>
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
            </StyledHeader>
        );
    }
}

export default Header;
