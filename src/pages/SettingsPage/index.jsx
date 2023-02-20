import React from 'react';
import Header from '@components/Header/HeaderFC';
import Settings from '@components/Settings';

import { Wrapper } from './styled';

const SettingsPage = () => (
    <Wrapper>
        <Header>Settings</Header>
        <Settings />
    </Wrapper>
);

export default SettingsPage;
