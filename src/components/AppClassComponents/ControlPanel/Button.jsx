import StyledButton from '@styles/ControlPanel/Button/style';
import React from 'react';

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
