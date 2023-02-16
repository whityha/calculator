import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
import Header from '@components/Header/HeaderCC';
import History from '@components/History/HistoryCC';

import Wrapper from './styled';

export default class HomeCC extends React.Component {
    render() {
        return (
            <Wrapper>
                <Header>CALCULATOR CC</Header>
                <Calculator />
                <History />
            </Wrapper>
        );
    }
}
