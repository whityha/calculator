import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledHeader,
    StyledNav,
    StyledTitle,
} from '@styles/Header/Header/style';

import Switcher from './Switcher';

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
