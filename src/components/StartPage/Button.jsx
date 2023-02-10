import React from 'react';

import StyledButton from './styled';

const Button = ({ children }) => {
    return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;
