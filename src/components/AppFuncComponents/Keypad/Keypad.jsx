import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Button from './Button';
import BUTTONS from '../../../constants/buttons';

const StyledKeypad = styled.div`
    grid-area: keypad;
    display: grid;
    grid-template-areas:
        'C seven eight nine multiply'
        'minus four five six ${(props) => props.area}'
        'plus one two three equal'
        'dot sl zero sr CE';
    grid-template-rows: 50px 50px 50px 50px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 1rem;
`;

const Keypad = ({ handle }) => {
    const exception = useSelector((state) => state.control.exception);
    const actualDig = useSelector((state) => state.control.actualDig);
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
