import React from 'react';
import styled from 'styled-components';
import ControlPanel from '@components/AppFuncComponents/ControlPanel/ControlPanel';
import History from '@components/AppFuncComponents/History/History';
import Calculator from '@components/AppFuncComponents/Calculator/Calculator';
import Header from '@components/AppFuncComponents/Header/Header';

const StyledApp = styled.div`
    height: 100vh;
    background: ${(props) => props.theme.background.primary};
`;

const StyledWrapperApp = styled.div`
    display: grid;
    grid-template-areas:
        'header header header'
        'display history controls'
        'keypad history controls';
    grid-template-rows: 1fr 1fr 7fr;
    grid-template-columns: 4fr 1fr 1fr;
    max-width: 1300px;
    margin: 0 auto;
    height: 100%;
`;

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
