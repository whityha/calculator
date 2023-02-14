import React from 'react';

import SwitcherThemeFC from './SwitcherTheme/Switcher';
import WrapperSettingsListFC from './styled';

const SettingsListFC = () => (
    <WrapperSettingsListFC>
        <SwitcherThemeFC />
        {/* <ShowHistory />
        <ClearHistoryButton /> */}
    </WrapperSettingsListFC>
);

export default SettingsListFC;
