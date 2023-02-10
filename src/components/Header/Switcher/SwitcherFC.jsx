import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '@actions/controlsActions';

import { Handler, WrapperSwitcher } from './styled';

const Switcher = () => {
    const dispatch = useDispatch();
    const handleSwitcher = () => {
        dispatch(switchTheme());
    };
    const color = useSelector(({ control: { theme } }) => theme);
    return (
        <WrapperSwitcher onClick={handleSwitcher}>
            <Handler position={color} />
        </WrapperSwitcher>
    );
};

export default Switcher;
