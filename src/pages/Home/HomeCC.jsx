import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
// import ControlPanel from '@components/ControlPanel/ControlPanel/ControlPanelCC';
import Header from '@components/Header/Header/HeaderCC';
import History from '@components/History/HistoryCC';

import LINKS from '../config';

import WrapperHome from './styled';

export default class HomeCC extends React.Component {
    render() {
        return (
            <WrapperHome>
                <Header links={LINKS.LINKS_CC}>CALCULATOR CC</Header>
                <Calculator />
                <History />
                {/* <ControlPanel /> */}
            </WrapperHome>
        );
    }
}
