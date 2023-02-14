import React from 'react';

import ClearButton from './ClearHistory/Button';
import TogglerHistory from './ShowHistory/TogglerHistory';
import SwitcherThemeFC from './SwitcherTheme/Switcher';
import WrapperSettingsListFC from './styled';

const SettingsListFC = () => (
    <WrapperSettingsListFC>
        <li>
            <SwitcherThemeFC />
        </li>

        <li>
            <TogglerHistory />
        </li>
        <ClearButton />
    </WrapperSettingsListFC>
);

export default SettingsListFC;
