import React from 'react';

import SETTING_LIST from './config';
import Wrapper from './styled';

const SettingsListFC = () => (
    <Wrapper>
        {SETTING_LIST.map(({ id, component }) => (
            <li key={id}>{component}</li>
        ))}
    </Wrapper>
);

export default SettingsListFC;
