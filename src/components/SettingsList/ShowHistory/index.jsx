import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { togglerShowHistory } from '@actions/controlsActions';

import { Input, Label, Wrapper } from './styled';

const TogglerHistoryFC = () => {
    const dispatch = useDispatch();
    const checked = useSelector(({ control }) => control.historyIsShow);
    const handleShowHistory = () => {
        dispatch(togglerShowHistory());
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
