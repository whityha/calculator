import React from 'react';

import ClearButton from './ClearHistory';
import TogglerHistory from './ShowHistory';
import SwitcherThemeFC from './SwitcherTheme';

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
