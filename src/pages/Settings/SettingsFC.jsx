import React from 'react';
import Header from '@components/Header/HeaderFC';
import SettingsListFC from '@components/SettingsList/SettingsListFC';

import { WrapperSettings } from './styled';

const SettingsFC = () => (
    <WrapperSettings>
        <Header />
        <SettingsListFC />
    </WrapperSettings>
);

export default SettingsFC;
