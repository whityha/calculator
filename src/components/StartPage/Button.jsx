import React from 'react';

import StyledButton from './styled';

const Button = ({ children }) => (
    <StyledButton type="button">{children}</StyledButton>
);

export default Button;
