import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
import Header from '@components/Header/HeaderCC';
import History from '@components/History/HistoryCC';

import WrapperHome from './styled';

export default class HomeCC extends React.Component {
    render() {
        return (
            <WrapperHome>
                <Header>CALCULATOR CC</Header>
                <Calculator />
                <History />
            </WrapperHome>
        );
    }
}
