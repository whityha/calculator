import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    grid-area: ${(props) => props.area};
    color: black;
    cursor: pointer;
    font-size: 1.3rem;
`;

const Button = ({ children, area }) => {
    return (
        <StyledButton area={area} type="button">
            {children}
        </StyledButton>
    );
};

export default Button;
