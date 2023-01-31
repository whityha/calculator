import React from 'react';
import styled from 'styled-components';

const StyledKeypad = styled.div`
    grid-area: keypad;
    padding: 1rem;
`;

const Keypad = () => {
    return (
        <StyledKeypad>
            <h1>Keypad</h1>
        </StyledKeypad>
    );
};

export default Keypad;
