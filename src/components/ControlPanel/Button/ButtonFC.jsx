import React from 'react';

import StyledButton from './styled';

const Button = ({ children, onClick }) => (
    <StyledButton type="button" onClick={onClick}>
        {children}
    </StyledButton>
);

export default Button;
