import React from 'react';
import Calculator from '@components/Calculator/CalculatorFC';
import Header from '@components/Header/HeaderFC';
import History from '@components/History/HistoryFC';
import { ToastContainer } from '@whityha/toast/dist/index.es';

import Wrapper from './styled';

const HomeFC = () => (
    <Wrapper>
        <Header>CALCULATOR FC</Header>
        <Calculator />
        <History />
        <ToastContainer />
    </Wrapper>
);

export default HomeFC;
