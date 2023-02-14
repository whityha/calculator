import React from 'react';

// import { useDispatch, useSelector } from 'react-redux';
// import { switchTheme } from '@actions/controlsActions';
import { Input, Label, Wrapper } from './styled';

const TogglerHistoryFC = () => (
    <Wrapper>
        <Label htmlFor="togglerHistory">SHOW HISTORY</Label>
        <Input type="checkbox" id="togglerHistory" />
    </Wrapper>
);
export default TogglerHistoryFC;
