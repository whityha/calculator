import React from 'react';
import { CC_PATH, DEFAULT, FC_PATH, SETTINGS_PATH } from '@constants/paths';

import NotFoundPage from '../pages/NotFound';

const HomeCC = React.lazy(() => import('../pages/Home/HomeCC'));
const HomeFC = React.lazy(() => import('../pages/Home/HomeFC'));
const Settings = React.lazy(() => import('../pages/Settings'));

const ROUTES = [
    { path: CC_PATH, element: <HomeCC /> },
    { path: FC_PATH, element: <HomeFC /> },
    { path: SETTINGS_PATH, element: <Settings /> },
    { path: DEFAULT, element: <NotFoundPage /> },
];

export default ROUTES;
