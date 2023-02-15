import React from 'react';

import { Description, ErrorWrapper, Title } from './styled';

export default class ErrorUI extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <ErrorWrapper>
                <Title>Что-то пошло не так</Title>
                <Description>Упс, {children}</Description>
            </ErrorWrapper>
        );
    }
}
