import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
import Header from '@components/Header/HeaderFC';
import History from '@components/History/HistoryFC';

import Wrapper from './styled';

const HomeFC = () => (
    <Wrapper>
        <Header>CALCULATOR FC</Header>
        <Calculator />
        <History />
    </Wrapper>
);

export default HomeFC;
