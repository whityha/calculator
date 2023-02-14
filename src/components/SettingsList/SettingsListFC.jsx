import React from 'react';

import SETTING_LIST from './config';
import WrapperSettingsListFC from './styled';

const SettingsListFC = () => (
    <WrapperSettingsListFC>
        {SETTING_LIST.map(({ id, component }) => (
            <li key={id}>{component}</li>
        ))}
    </WrapperSettingsListFC>
);

export default SettingsListFC;
