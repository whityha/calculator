import {
    CC_PATH,
    DEFAULT_PATH,
    FC_PATH,
    SETTINGS_PATH,
} from '@constants/paths';

const LINKS = {
    LINKS_CC: [
        {
            path: DEFAULT_PATH,
            text: 'Main',
        },
        {
            path: FC_PATH,
            text: 'Functional calculator',
        },

        {
            path: SETTINGS_PATH,
            text: 'Settings',
        },
    ],
    LINKS_FC: [
        {
            path: DEFAULT_PATH,
            text: 'Main',
        },
        {
            path: CC_PATH,
            text: 'Class calculator',
        },

        {
            path: SETTINGS_PATH,
            text: 'Settings',
        },
    ],
    LINKS_SETTINGS: [
        { path: DEFAULT_PATH, text: 'Main' },
        {
            path: CC_PATH,
            text: 'Class calculator',
        },
        {
            path: FC_PATH,
            text: 'Functional calculator',
        },
    ],
};

export default LINKS;
