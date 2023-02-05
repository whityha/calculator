import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import BUTTONS from '@constants/buttons';
import Button from './Button';

const StyledKeypad = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-areas:
        'C seven eight nine multiply'
        'minus four five six ${({ area }) => area}'
        'plus one two three equal'
        'dot sl zero sr CE'
        'plusmn plusmn plusmn plusmn plusmn';
    grid-template-rows: 50px 50px 50px 50px 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 1rem;
`;

const Keypad = ({ handle }) => {
    const exception = useSelector(({ control }) => control.exception);
    const actualDig = useSelector(({ control }) => control.actualDig);
    return (
        <StyledKeypad area={actualDig}>
            {BUTTONS.filter(({ name }) => name !== exception).map(
                ({ name, dig }) => (
                    <Button
                        key={name}
                        name={name}
                        area={name}
                        onClick={handle(dig, name)}
                    >
                        {dig}
                    </Button>
                )
            )}
        </StyledKeypad>
    );
};

export default Keypad;
