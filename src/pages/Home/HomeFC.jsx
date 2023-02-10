import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
import ControlPanel from '@components/ControlPanel/ControlPanel/ControlPanelFC';
import Header from '@components/Header/Header/HeaderFC';
import History from '@components/History/HistoryFC';

import { StyledApp, StyledWrapperApp } from './styled';

const HomeFC = () => (
    <StyledApp>
        <StyledWrapperApp>
            <Header />
            <Calculator />
            <History />
            <ControlPanel />
        </StyledWrapperApp>
    </StyledApp>
);

export default HomeFC;
