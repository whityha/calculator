import React from 'react';
import { Link } from 'react-router-dom';
import { CC_PATH, DEFAULT_PATH } from '@constants/paths';

import Switcher from '../Switcher/SwitcherFC';

import { Nav, Title, WrapperHeader } from './styled';

const LINKS = [
    {
        path: DEFAULT_PATH,
        text: 'Main',
    },
    {
        path: CC_PATH,
        text: 'Class calculator',
    },
];

const Header = () => (
    <WrapperHeader>
        <Title>FUNCTIONAL COMPONENTS CALCULATOR</Title>
        <Nav>
            {LINKS.map(({ path, text }) => (
                <li key={path}>
                    <Link to={path}>{text}</Link>
                </li>
            ))}
        </Nav>
        <Switcher />
    </WrapperHeader>
);

export default Header;
