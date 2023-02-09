import React from 'react';
import StyledButton from '@styles/ControlPanel/Button/style';

const Button = ({ children, onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
