import React from 'react';

import StyledButton from './styled';

const Button = ({ children, onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
