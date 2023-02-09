import Calculator from '@components/AppClassComponents/Calculator/Calculator';
import ControlPanel from '@components/AppClassComponents/ControlPanel/ControlPanel';
import Header from '@components/AppClassComponents/Header/Header';
import History from '@components/AppClassComponents/History/History';
import { StyledApp, StyledWrapperApp } from '@styles/App/style';
import React from 'react';

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
