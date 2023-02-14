import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
import Header from '@components/Header/Header/HeaderFC';
import History from '@components/History/HistoryFC';

import LINKS from '../config';

import WrapperHome from './styled';

const HomeFC = () => (
    <WrapperHome>
        <Header links={LINKS.LINKS_FC}>CALCULATOR FC</Header>
        <Calculator />
        <History />
    </WrapperHome>
);

export default HomeFC;
