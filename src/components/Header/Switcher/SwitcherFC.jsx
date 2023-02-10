import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '@actions/controlsActions';

import { StyledHandler, WrapperSwitcher } from './styled';

const Switcher = () => {
    const dispatch = useDispatch();
    const handleSwitcher = () => {
        dispatch(switchTheme());
    };
    const color = useSelector(({ control: { theme } }) => theme);
    return (
        <WrapperSwitcher onClick={handleSwitcher}>
            <StyledHandler position={color === 'light' ? 'right' : 'left'} />
        </WrapperSwitcher>
    );
};

export default Switcher;
