import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import DIGITS from '../../../constants/digits';

const StyledKeypad = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-areas:
        'C seven eight nine multiply'
        'minus four five six divide'
        'plus one two three equal'
        'dot sl zero sr CE';
    grid-template-rows: 50px 50px 50px 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 1rem;
`;

const Keypad = () => {
    return (
        <StyledKeypad>
            {DIGITS.map(({ name, dig }) => (
                <Button key={name} area={name}>
                    {dig}
                </Button>
            ))}
        </StyledKeypad>
    );
};

export default Keypad;
