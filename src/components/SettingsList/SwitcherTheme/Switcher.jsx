import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '@actions/controlsActions';
import { THEMES } from '@styled/theme/config';

import { Option, Switcher, Title } from './styled';

const SwitcherThemeFC = () => {
    const theme = useSelector(({ control }) => control.theme);
    const dispatch = useDispatch();
    const { DARK, LIGHT, COLORED } = THEMES;

    const handleTheme = (e) => {
        dispatch(switchTheme(e.target.value));
    };
    return (
        <>
            <Title>Switch theme</Title>
            <Switcher defaultValue={theme} onChange={handleTheme}>
                <Option value={DARK}>DARK</Option>
                <Option value={LIGHT}>LIGHT</Option>
                <Option value={COLORED}>COLORED</Option>
            </Switcher>
        </>
    );
};

export default SwitcherThemeFC;
