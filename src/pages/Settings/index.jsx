import React from 'react';
import Header from '@components/Header/HeaderFC';
import SettingsList from '@components/SettingsList';

import { Wrapper } from './styled';

const Settings = () => (
    <Wrapper>
        <Header>Settings</Header>
        <SettingsList />
    </Wrapper>
);

export default Settings;
