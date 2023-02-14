import React from 'react';
import Header from '@components/Header/Header/HeaderFC';
import SettingsListFC from '@components/SettingsList/SettingsListFC';

import LINKS from '../config';

import { WrapperSettings } from './styled';

const SettingsFC = () => (
    <WrapperSettings>
        <Header links={LINKS.LINKS_SETTINGS}>SETTINGS</Header>
        <SettingsListFC />
    </WrapperSettings>
);

export default SettingsFC;
