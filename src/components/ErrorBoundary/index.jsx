import React from 'react';

import ErrorUI from './UI-Error';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorText: 'ok',
        };
    }

    componentDidCatch(e) {
        this.setState({
            hasError: true,
            errorText: `произошла ошибка ${e}`,
        });
    }

    render() {
        const { hasError, errorText } = this.state;
        const { children } = this.props;
        return hasError ? <ErrorUI>{errorText}</ErrorUI> : children;
    }
}
