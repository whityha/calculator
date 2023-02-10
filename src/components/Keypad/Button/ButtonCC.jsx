import React from 'react';

import StyledButton from './styled';

export default class Button extends React.PureComponent {
    render() {
        const { children, area, onClick, name } = this.props;
        return (
            <StyledButton
                area={area}
                name={name}
                type="button"
                onClick={onClick}
            >
                {children}
            </StyledButton>
        );
    }
}
