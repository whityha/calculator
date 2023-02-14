import React from 'react';
import { CC_PATH, DEFAULT_PATH, FC_PATH } from '@constants/paths';

import StartPage from '../pages/StartPage/StartPage';

const HomeCC = React.lazy(() => import('../pages/Home/HomeCC'));
const HomeFC = React.lazy(() => import('../pages/Home/HomeFC'));

const ROUTES = [
    { path: DEFAULT_PATH, element: <StartPage /> },
    { path: CC_PATH, element: <HomeCC /> },
    { path: FC_PATH, element: <HomeFC /> },
];

export default ROUTES;
