import React from 'react';

import { Description, Details, ErrorWrapper, Title } from './styled';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorText: '',
            errorInfo: '',
        };
    }

    componentDidCatch(e, errorInfo) {
        this.setState({
            hasError: true,
            errorText: `произошла ошибка ${e}`,
            errorInfo,
        });
    }

    render() {
        const { hasError, errorText, errorInfo } = this.state;
        const { children } = this.props;
        return hasError ? (
            <ErrorWrapper>
                <Title>Что-то пошло не так</Title>
                <Description>Упс, {errorText}</Description>
                <Details>{errorInfo.componentStack}</Details>
            </ErrorWrapper>
        ) : (
            children
        );
    }
}
