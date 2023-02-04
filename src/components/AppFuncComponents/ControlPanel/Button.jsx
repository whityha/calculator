import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    color: black;
    padding: 1rem 0.5rem;
    cursor: pointer;
`;

const Button = (props) => {
    const { children, onClick } = props;
    return (
        <StyledButton type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default Button;
