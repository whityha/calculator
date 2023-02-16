import React from 'react';
import Header from '@components/Header/HeaderFC';
import SettingsList from '@components/SettingsList';

import { WrapperSettings } from './styled';

const SettingsFC = () => (
    <WrapperSettings>
        <Header>Settings</Header>
        <SettingsList />
    </WrapperSettings>
);

export default SettingsFC;
