import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
import Header from '@components/Header/HeaderFC';
import History from '@components/History/HistoryFC';

import WrapperHome from './styled';

const HomeFC = () => (
    <WrapperHome>
        <Header>CALCULATOR FC</Header>
        <Calculator />
        <History />
    </WrapperHome>
);

export default HomeFC;
