import React from 'react';
// import ControlPanel from '@components/AppFuncComponents/ControlPanel/ControlPanel';
// import History from '@components/AppFuncComponents/History/History';
// import Calculator from '@components/AppFuncComponents/Calculator/Calculator';
import Header from '@components/AppClassComponents/Header/Header';
import History from '@components/AppClassComponents/History/History';
import Calculator from '@components/AppClassComponents/Calculator/Calculator';
import ControlPanel from '@components/AppClassComponents/ControlPanel/ControlPanel';
import { StyledApp, StyledWrapperApp } from '@styles/App/style';

export default class AppFunc extends React.PureComponent {
    render() {
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
    }
}
