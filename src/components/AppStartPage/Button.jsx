import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 1rem 2rem;
    cursor: pointer;
    background: #383737;
    color: white;
`;

const Button = ({ children }) => {
    return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;
