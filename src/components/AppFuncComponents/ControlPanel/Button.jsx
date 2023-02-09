import StyledButton from '@styles/ControlPanel/Button/style';
import React from 'react';

const Button = ({ children, onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
