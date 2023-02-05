import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    grid-area: ${({ area }) => area};
    color: black;
    cursor: pointer;
    font-size: 1.3rem;
`;

const Button = ({ children, area, onClick, name }) => {
    return (
        <StyledButton area={area} name={name} type="button" onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default React.memo(Button);
