import React from 'react';

import StyledButton from './styled';

export default class Button extends React.PureComponent {
    render() {
        const { onClick, children } = this.props;
        return (
            <StyledButton type="button" onClick={onClick}>
                {children}
            </StyledButton>
        );
    }
}
