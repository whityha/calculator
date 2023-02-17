import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchTheme } from '@actions/settings';

import OPTIONS from './config';
import { Option, Switcher, Title } from './styled';

const SwitcherThemeFC = () => {
    const theme = useSelector(({ settings }) => settings.theme);
    const dispatch = useDispatch();

    const handleTheme = (e) => {
        dispatch(switchTheme(e.target.value));
    };
    return (
        <>
            <Title>Switch theme</Title>
            <Switcher defaultValue={theme} onChange={handleTheme}>
                {OPTIONS.map(({ id, value }) => (
                    <Option key={id} value={value}>
                        {value.toUpperCase()}
                    </Option>
                ))}
                ;
            </Switcher>
        </>
    );
};

export default SwitcherThemeFC;
