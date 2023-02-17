import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowHistory } from '@actions/settings';

import { Input, Label, Wrapper } from './styled';

const TogglerHistoryFC = () => {
    const dispatch = useDispatch();
    const checked = useSelector(({ settings }) => settings.isShowHistory);
    const handleShowHistory = () => {
        dispatch(toggleShowHistory());
    };
    return (
        <Wrapper>
            <Label htmlFor="togglerHistory">SHOW HISTORY</Label>
            <Input
                onChange={handleShowHistory}
                type="checkbox"
                checked={checked}
                id="togglerHistory"
            />
        </Wrapper>
    );
};
export default TogglerHistoryFC;
