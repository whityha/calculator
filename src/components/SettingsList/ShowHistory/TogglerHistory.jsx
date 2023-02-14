import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { switchTheme } from '@actions/controlsActions';
import { Input, Label, Wrapper } from './styled';

const TogglerHistoryFC = () => (
    // const historyIsShow = useSelector(({ control }) => control.historyIsShow);
    // const dispatch = useDispatch();

    // const handleTheme = (e) => {
    //     dispatch(switchTheme(e.target.value));
    // };
    <Wrapper>
        <Label for="togglerHistory">SHOW HISTORY</Label>
        <Input type="checkbox" id="togglerHistory" />
    </Wrapper>
);
export default TogglerHistoryFC;
