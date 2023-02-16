import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
// import ControlPanel from '@components/ControlPanel/ControlPanel/ControlPanelCC';
import Header from '@components/Header/Header/HeaderCC';
import History from '@components/History/HistoryCC';

import { StyledApp, StyledWrapperApp } from './styled';

export default class HomeCC extends React.Component {
    render() {
        return (
            <StyledApp>
                <StyledWrapperApp>
                    <Header />
                    <Calculator />
                    <History />
                    {/* <ControlPanel /> */}
                </StyledWrapperApp>
            </StyledApp>
        );
    }
}
