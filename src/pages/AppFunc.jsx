import React from 'react';
import ControlPanel from '@components/AppFuncComponents/ControlPanel/ControlPanel';
import History from '@components/AppFuncComponents/History/History';
import Calculator from '@components/AppFuncComponents/Calculator/Calculator';
import Header from '@components/AppFuncComponents/Header/Header';
import { StyledApp, StyledWrapperApp } from '@styles/App/style';

const AppFunc = () => {
    return (
        <StyledApp>
            <StyledWrapperApp>
                <Header />
                <Calculator />
                <History />
                <ControlPanel />
            </StyledWrapperApp>
        </StyledApp>
    );
};

export default AppFunc;
