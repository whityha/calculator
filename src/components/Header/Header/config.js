import { CC_PATH, DEFAULT_PATH, FC_PATH } from '@constants/paths';

const LINKS_CC = [
    {
        path: DEFAULT_PATH,
        text: 'Main',
    },
    {
        path: FC_PATH,
        text: 'Functional calculator',
    },
];

const LINKS_FC = [
    {
        path: DEFAULT_PATH,
        text: 'Main',
    },
    {
        path: CC_PATH,
        text: 'Class calculator',
    },
];

export { LINKS_CC, LINKS_FC };
