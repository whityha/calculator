import React from 'react';

import { Description, Details, ErrorWrapper, Title } from './styled';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorText: '',
            errorInfo: '',
        };
    }

    componentDidCatch(e, errorInfo) {
        this.setState({
            errorText: `${e}`,
            errorInfo,
        });
    }

    render() {
        const { errorText, errorInfo } = this.state;
        const { children } = this.props;
        return errorText ? (
            <ErrorWrapper>
                <Title>Что-то пошло не так</Title>
                <Description>Упс, произошла ошибка {errorText}</Description>
                <Details>{errorInfo.componentStack}</Details>
            </ErrorWrapper>
        ) : (
            children
        );
    }
}
