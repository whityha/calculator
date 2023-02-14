import React from 'react';

import ClearButton from './ClearHistory/ButtonFC';
import TogglerHistory from './ShowHistory/TogglerHistory';
import SwitcherThemeFC from './SwitcherTheme/Switcher';

const SETTING_LIST = [
    {
        id: 1,
        component: <SwitcherThemeFC />,
    },
    {
        id: 2,
        component: <TogglerHistory />,
    },
    {
        id: 3,
        component: <ClearButton />,
    },
];

export default SETTING_LIST;
