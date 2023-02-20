import React from 'react';

import ClearButton from './ClearHistory';
import TogglerHistory from './ShowHistory';
import Wrapper from './styled';
import SwitcherTheme from './SwitcherTheme';

const Settings = () => (
    <Wrapper>
        <SwitcherTheme />
        <TogglerHistory />
        <ClearButton />
    </Wrapper>
);

export default Settings;
