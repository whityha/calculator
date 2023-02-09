import BUTTONS from '@constants/buttons';
import StyledKeypad from '@styles/Keypad/Keypad/style';
import React from 'react';
import { useSelector } from 'react-redux';

import Button from './Button';

const Keypad = ({ handle }) => {
    const exception = useSelector(({ control: { exception: exc } }) => exc);
    const actualDig = useSelector(({ control: { actualDig: act } }) => act);
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
